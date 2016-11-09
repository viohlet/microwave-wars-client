'use strict';

require('./example');

const authEvents = require('./auth/events');
const gameEvents = require('./game/events');


$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
