'use strict';

global.api = {};
require('./enhancedEventEmitter.js');

global.application = api.events.enhancedEventEmitter();

application.on('smth', (data) => {
  console.dir(data);
});

application.on('*', (name, data) => {
  console.dir([name, data]);
});

application.emit('smth', { a: 5 });
