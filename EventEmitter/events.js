'use strict';

api.events = require('events');

api.events.enhancedEventEmitter = function() {
  var ee = new api.events.EventEmitter(),
      emit = ee.emit;
  ee.emit = function() {
    var args = [];
    Array.prototype.push.apply(args, arguments);
    args.unshift('*');
    emit.apply(ee, args);
    emit.apply(ee, arguments);
  };
  return ee;
};
