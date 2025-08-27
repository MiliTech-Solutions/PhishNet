// Structural placeholder only – real config to be added later.
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
      exclude: [
        'docusaurus.config.*',
        'sidebars.*',
        '**/dist/**',
        '**/coverage/**'
      ]
    }
  }
});