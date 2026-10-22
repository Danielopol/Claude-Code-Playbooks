#!/usr/bin/env node
import { run } from '../src/cli.mjs';

run(process.argv.slice(2)).then(
  (code) => {
    process.exitCode = code;
  },
  (err) => {
    console.error(err?.stack || err);
    process.exitCode = 1;
  }
);
