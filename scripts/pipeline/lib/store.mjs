/**
 * Append-only JSONL storage with resume support.
 *
 * A full crawl runs for hours and will get interrupted — rate limits, network
 * drops, Ctrl-C, laptop sleep. Everything here is designed so re-running a
 * stage picks up where it left off instead of re-fetching from zero:
 *   - records append immediately (no in-memory buffer to lose)
 *   - each stage records which units it has already completed
 *   - re-running skips completed units and dedupes on write
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = path.join(here, '..', 'data');

fs.mkdirSync(DATA_DIR, { recursive: true });

export function dataPath(name) {
  return path.join(DATA_DIR, name);
}

/** Append-only JSONL writer that refuses to write a duplicate key twice. */
export class JsonlStore {
  constructor(filename, keyFn) {
    this.file = dataPath(filename);
    this.keyFn = keyFn;
    this.seen = new Set();
    this.added = 0;
    this.duplicates = 0;

    if (fs.existsSync(this.file)) {
      const text = fs.readFileSync(this.file, 'utf8');
      for (const line of text.split('\n')) {
        if (!line.trim()) continue;
        try {
          this.seen.add(this.keyFn(JSON.parse(line)));
        } catch {
          // Truncated final line from an interrupted write — ignore it.
        }
      }
    }
    this.fd = fs.openSync(this.file, 'a');
  }

  has(record) {
    return this.seen.has(this.keyFn(record));
  }

  /** Returns true if written, false if it was a duplicate. */
  add(record) {
    const key = this.keyFn(record);
    if (this.seen.has(key)) {
      this.duplicates++;
      return false;
    }
    this.seen.add(key);
    fs.writeSync(this.fd, `${JSON.stringify(record)}\n`);
    this.added++;
    return true;
  }

  addMany(records) {
    let n = 0;
    for (const r of records) if (this.add(r)) n++;
    return n;
  }

  get size() {
    return this.seen.size;
  }

  close() {
    try {
      fs.closeSync(this.fd);
    } catch {
      /* already closed */
    }
  }
}

export function readJsonl(filename) {
  const file = dataPath(filename);
  if (!fs.existsSync(file)) return [];
  const out = [];
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      out.push(JSON.parse(line));
    } catch {
      /* skip malformed */
    }
  }
  return out;
}

/**
 * Tracks which work units a stage has finished, so an interrupted run doesn't
 * redo them. Flushed on every mark — losing progress costs more than the write.
 */
export class Checkpoint {
  constructor(filename) {
    this.file = dataPath(filename);
    this.done = new Set();
    if (fs.existsSync(this.file)) {
      for (const line of fs.readFileSync(this.file, 'utf8').split('\n')) {
        if (line.trim()) this.done.add(line.trim());
      }
    }
    this.fd = fs.openSync(this.file, 'a');
  }

  has(id) {
    return this.done.has(id);
  }

  mark(id) {
    if (this.done.has(id)) return;
    this.done.add(id);
    fs.writeSync(this.fd, `${id}\n`);
  }

  get size() {
    return this.done.size;
  }

  close() {
    try {
      fs.closeSync(this.fd);
    } catch {
      /* already closed */
    }
  }
}

/** Single-line progress output that doesn't flood a long-running log. */
export function progress(label, current, total, extra = '') {
  const pct = total ? ((current / total) * 100).toFixed(1) : '0.0';
  const line = `  ${label}: ${current}/${total} (${pct}%) ${extra}`.padEnd(100);
  if (process.stdout.isTTY) {
    process.stdout.write(`\r${line}`);
  } else if (current % 100 === 0 || current === total) {
    console.log(line.trim());
  }
}

export function endProgress() {
  if (process.stdout.isTTY) process.stdout.write('\n');
}
