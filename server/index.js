'use strict';

require ('dotenv').config();

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const server = new Server();
console.log('Listening on port', PORT);
server.listen(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Connected to the CAPS name space', socket.id);

//   insert content here
});