'use strict';

const app = require('../app');

const onStartGameSuccess = function (){
  $('#showgame').css('display', 'block');
};

const success = function () {
  console.log('create success');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  onStartGameSuccess,
  failure,
  success,
};
