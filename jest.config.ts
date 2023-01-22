export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/**/__tests__/**/*/spec.ts',
    '**/*.spec.js',
    '**/*.test.ts',
    '**/*.test.tsx',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  reporters: ['default', 'jest-junit'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: { '^.+\\.tsx?$': ['ts-jest'] },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/assetsTransformer.ts',
    '\\.(css|less)$': '<rootDir>/src/assets/assetsTransformer.ts',
  },
};
