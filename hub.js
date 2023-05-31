'use strict';

// this is a less tethered example.  
// think of the "hub" as the body listening to all of the body parts

let eventEmitter = require('./eventEmitter');

// require the sun code, the hub will allow it to run as part of this "pool"
require('./sun');

// handlers

const driverHandler = require('./brain');
const vendorHandler = require('./pupils');

// listeners to all events
// this can be called in the eyes/index.js file
// multiple listeners performing diff operations:  NOI PROBLEM
eventEmitter.on('SUNLIGHT', (payload) => console.log('something happened with sunlight', payload));
eventEmitter.on('BRIGHTNESS', driverHandler);
eventEmitter.on('DILATION', vendorHandler);

