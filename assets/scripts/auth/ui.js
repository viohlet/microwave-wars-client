'use strict';

const app = require('../app');
// const main = require('../game/main.js');


const signInSuccess = (data) => {
  app.user = data.user;

  $('.required-auth').css('display', 'none');
  $('.other-auth-settings').css('display', 'block');
  $('#showgame').css('display', 'block');

};

const success = () => {
  console.log('success');
};

const failure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  delete app.user;
  $('.required-auth').css('display', 'block');
  $('.other-auth-settings').css('display', 'none');
  $('#showgame').css('display', 'none');
  $('#maindiv').css('display', 'none');
  $('.before-start').css('display', 'block');

};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  app,
};
