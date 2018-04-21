// (function (exports, require, module, __filename, __dirname) {

  console.log(__filename);
  console.log(__dirname);

  const URL = 'http://mylogger.io/log';

  const log = message => console.log(message);

  // module.exports.log = log;
  // exports.log = log;
  module.exports = log;

// })