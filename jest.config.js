module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  setupFiles: ['dotenv/config'],
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.(test|spec).ts"],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
};