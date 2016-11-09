'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

// const main = require('./main');


const onCreate = function () {
  api.newGame()
    .done(ui.onStartGameSuccess)
    .fail(ui.onError);
};

// const showGameHistory = function (data) {
//   let total = 0;
//   if (data.games[0]) {
//     total = data.games.length;
//   }
//
//   $('#total-games').html(`${total}`);
//   $('#game-history').modal('show');
// };

const onIndexGames = function (event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.onIndexGamesSuccess)
    .fail(ui.onError);
};

const onDeleteGames = function (event) {
  event.preventDefault();
  api.deleteGames()
      .done(ui.success)
      .fail(ui.failure);
};

const addHandlers = () => {
  $('#index-games').on('submit', onIndexGames);
  $('#startbutton').on('click', onCreate);
  $('#delete-games').on('submit', onDeleteGames);
};

module.exports = {
  addHandlers,
};
