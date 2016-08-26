'use strict';

global.api = {};
require('./simpleEventEmitter.js');

global.application = new EventEmitter();

application.on('smth', (data) => {
  console.dir(data);
});

application.emit('smth', { a: 5 });
