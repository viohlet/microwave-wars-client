'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
      .done(ui.success)
      .fail(ui.failure);
  $('#sign-up').modal('hide');
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
      .done(ui.signInSuccess)
      .fail(ui.failure);
  $('#sign-in').modal('hide');
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
      .done(ui.success)
      .fail(ui.failure);
  $('#change-password').modal('hide');
};

const OnSignOut = function (event) {
  event.preventDefault();
  api.signOut()
      .done(ui.signOutSuccess)
      .fail(ui.failure);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('#sign-out').on('click', OnSignOut);

};

module.exports = {
  addHandlers,
};
