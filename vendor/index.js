'use strict';

let eventEmitter = require('../eventEmitter');

const handler = require('./handler');

const vendorHandler = (payload) => {
  setTimeout(() => {
    // do the thing
    handler(payload);
  }, 1000);
};

eventEmitter.on('SUNLIGHT', vendorHandler);

module.exports = vendorHandler;
