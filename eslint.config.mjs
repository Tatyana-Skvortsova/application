import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import unicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  stylistic.configs.recommended,
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn,
    },
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    ...unicorn.configs.recommended,
    rules: {
      '@stylistic/indent': ['error', 2],
      'unicorn/better-regex': 'warn',
    },
  },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
