import { readFileSync } from 'node:fs';

/** Read from package.json so `npm version` is the only place to bump it. */
export const VERSION = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version;
