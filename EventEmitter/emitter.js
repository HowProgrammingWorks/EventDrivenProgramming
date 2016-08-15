'use strict';

global.EventEmitter = function() {
  this.events = {};
};

EventEmitter.prototype.on = (name, callback) => {
  this.events[name] = this.events[name] || [];
  this.events[name].push(callback);
};

EventEmitter.prototype.emit = (name, data) => {
  let event = this.events[name];
  if (event) event.forEach((callback) => {
    callback(data);
  });
};
