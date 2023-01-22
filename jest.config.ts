export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/__tests__/**/*/spec.ts', '**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  reporters: ['default', 'jest-junit'],
  globals: { 'ts-jest': { diagnostics: false }},
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
}
