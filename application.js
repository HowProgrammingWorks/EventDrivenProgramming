'use strict';

global.api = {};
require('./events.js');

global.application = api.events.enhancedEventEmitter();

application.on('smth', function(data) {
  console.dir(data);
});

application.on('*', function(name, data) {
  console.dir([name, data]);
});

application.emit('smth', { a: 5 });
