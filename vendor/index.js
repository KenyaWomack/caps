'use strict';

const { orderHandler, deliveredMessage }= require('./handler');
const eventEmitter = require('../eventPool');

// starts the event cycle, note that the pickup emit is inside the orderHandler
setInterval(() => {
  orderHandler();
}, 5000);

eventEmitter.on('delivered', deliveredMessage);

// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');

// socket.on and handlers, and emits go here

