module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
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