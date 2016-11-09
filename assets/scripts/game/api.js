
'use strict';

const app = require('../app');
// const authApi = require('../auth/ui.js');

let gameId;

const newGame = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      game: {
        score: 0,
        time: 10,
        iscomplete: false
      },
    },
  }).then(data => gameId = data.game.id);
};

// const update = function (data) {
//   console.log(data);
//   return $.ajax({
//     url: app.api + '/games/' + gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + authApi.app.user.token,
//     },
//     data: {
//       game: {
//         zombie: data,
//       },
//     },
//   });
// };

// const getMyGames = function () {
//   return $.ajax({
//     url: app.api + '/mygames',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + authApi.app.user.token,
//     },
//
//   });
// };

// const getGames = function () {
//   return $.ajax({
//     url: app.api + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + authApi.app.user.token,
//     },
//   });
// };


// const cleanHistory = () => $.ajax({
//   url: app.api + '/mygames',
//   method: 'DELETE',
//   headers: {
//     Authorization: 'Token token=' + app.user.token,
//   },
// });

module.exports = {
  newGame,
  // update,
  // getGames,
  // displayRanking,
  // getMyGames,
  // cleanHistory,
};
