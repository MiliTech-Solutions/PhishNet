module.exports = {
  root: true,
  env: { es2022: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['dist', 'build', 'coverage'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
    // 'plugin:react/recommended' (add once frontend framework chosen)
    // 'plugin:security/recommended' (add later)
  ],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: { 'vitest-globals/env': true },
      rules: {}
    }
  ],
  rules: {
    // Tighten incrementally; keep initial friction low
  }
};