const logSymbols = require('log-symbols');



function log(message, type='info'){
  console.log(logSymbols[type], message);
}

module.exports.log = log;