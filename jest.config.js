/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testEnvironment: 'jsdom',
  rootDir: './src',
  setupFilesAfterEnv: [
    "<rootDir>/test/setupTests.js"
  ],
};
