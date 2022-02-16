const path = require('path');


module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css)$': path.join(__dirname, 'client/src/config/styleMock.js')
  },
};
