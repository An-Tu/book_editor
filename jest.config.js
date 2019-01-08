module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
