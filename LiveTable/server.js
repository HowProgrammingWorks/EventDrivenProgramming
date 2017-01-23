'use strict';

global.api = {};
api.fs = require('fs');
api.http = require('http');
api.websocket = require('websocket');

const index = api.fs.readFileSync('./index.html');

const server = api.http.createServer((req, res) => {
  res.writeHead(200);
  res.end(index);
});

server.listen(80, () => {
  console.log('Listen port 80');
});

const ws = new api.websocket.server({
  httpServer: server,
  autoAcceptConnections: false
});

const clients = [];

ws.on('request', (req) => {
  const connection = req.accept('', req.origin);
  clients.push(connection);
  console.log('Connected ' + connection.remoteAddress);
  connection.on('message', (message) => {
    const dataName = message.type + 'Data';
    const data = message[dataName];
    console.log('Received: ' + data);
    clients.forEach((client) => {
      if (connection !== client) {
        client.send(data);
      }
    });
  });
  connection.on('close', (reasonCode, description) => {
    console.log('Disconnected ' + connection.remoteAddress);
  });
});
