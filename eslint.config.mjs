import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

/*
 * eslint-config-next 15.x ships legacy eslintrc configs — `core-web-vitals.js`
 * and `typescript.js` each export a plain `{ extends: [...] }` object, not a
 * flat-config array. This file previously spread them directly
 * (`...nextVitals`), which is the eslint-config-next 16 shape and threw
 * "nextVitals is not iterable" on every run, so linting never actually ran.
 *
 * FlatCompat translates the legacy configs into flat config. If
 * eslint-config-next is ever upgraded to 16+, this can collapse back to
 * importing `eslint-config-next/core-web-vitals` and spreading it.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Flat config has no implicit ignores beyond node_modules, so the build
    // output and generated files have to be listed explicitly.
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/lib/playbooks-index.json",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      /*
       * Default config flags `>`, `}`, `"` and `'` in JSX text. Only `>` and
       * `}` can actually break a parse; `"` and `'` are valid and render
       * correctly. With the blog posts written as long-form prose in JSX, the
       * quote checks produced 1,185 errors — all of them cosmetic, and enough
       * noise to bury the 12 real problems underneath.
       *
       * Keep the two characters that matter, drop the two that don't.
       */
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
  },
];

export default eslintConfig;
