/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  //  we are in production return th prod keys
  module.exports = require('./prod');
} else {
  // we are in dev and return the dev keys
  module.exports = require('./dev.js');
}
