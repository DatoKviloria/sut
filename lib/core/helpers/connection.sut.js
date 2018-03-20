/*
* David Kviloria <datokviloira@gmail.com>
* sut@neo
*/

const SUTHandler = require('../modules/handler.sut');
const os = require('os');
const ip = require('ip');

exports.connect = (options) => {
  

  if (typeof options === 'object') {
      
    let connected_users = [];

    const createServer = (req, res) => {
      res.writeHead(200);
      res.end('SUT@NEO Server');
    };
         
    const http = require('http')
      .Server(createServer)
      .listen(options.server.port || 1960, '0.0.0.0', () =>
        (options.server.message) ? 
          console.log(`Server Listen On: ${ip.address() + ':' + options.server.port || 1960}\n`)
          : null
      );

    const io = require('socket.io')(http);
      
    io.on('connection', (socket) => {
      
      connected_users.push({
        id: socket.id,
        username: os.userInfo().username
      });
      
      if (options.server.message) {
        console.log(os.userInfo().username, ':', socket.id);
      }
  
      socket.emit('test', { 
        body: JSON.stringify(
          options.server.data && options.server.data || {
            data: null
          })
      });

      if (options.client.hasOwnProperty('chat')) {
        if (options.client.chat) {
          SUTHandler('Chat is not supported at this moment, need work ...', 0);
          // socket.on('message', (message) => {
          //   io.emit('message', {message});
          // });
          // socket.on('typing', (data) => {
          //   io.emit('typing', {data});
          // });
        }
      }

    });
  
  } else {
    SUTHandler('Missing Params: sut.connect( options:object ) requires object type argument, but given '+ typeof props, 0);
  }

};
