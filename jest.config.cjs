module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/shared', '<rootDir>/backend', '<rootDir>/frontend'],
  collectCoverage: true,
  collectCoverageFrom: ['shared/**/*.{js,ts}', 'backend/**/*.{js,ts}', 'frontend/**/*.{js,ts}'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};