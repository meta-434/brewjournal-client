export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test_reports',
        outputName: 'jest-junit.xml',
      },
    ],
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: { '^.+\\.tsx?$': ['ts-jest'] },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/assetsTransformer.ts',
    '\\.(css|less)$': '<rootDir>/src/assets/assetsTransformer.ts',
  },
};
