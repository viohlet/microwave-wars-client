'use strict';

const app = require('../app');

const onStartGameSuccess = function (){
  $('#showgame').css('display', 'block');
};

// const onGetGamesSuccess = function () {
//   console.log('show games');
//   api.getGames()
//     .done(api.displayRanking)
//     .fail(ui.onError);
// };

const onIndexGamesSuccess = (data) => {
  document.getElementById("message").innerHTML = 'Games played: '+ data.games.length;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};





const success = function () {
  console.log('create success');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  onStartGameSuccess,
  onIndexGamesSuccess,
  failure,
  success,
};
