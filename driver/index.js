'use strict';

let eventEmitter = require('../eventEmitter');

const driverHandler = (payload) => {
  setTimeout(() => {
    console.log('DRIVER: picked up ', payload.orderId);
    if(payload.brightness > 50){
      // payload in this case is the string 'close'
      eventEmitter.emit('DILATION', 'close');
      eventEmitter.emit('SHIELD_EYES', 'use hand to shield eyes');
    } else {
      eventEmitter.emit('DILATION', 'open');
    }
  }, 1000);
};

module.exports = driverHandler;
