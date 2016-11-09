'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreate = function () {
  api.newGame()
    .done(ui.onStartGameSuccess)
    .fail(ui.onError);
};

// const onCreate = function (event) {
//   event.preventDefault();
// 	let data = getFormFields(event.target);
//   api.create(data)
// 	  .done(ui.onStartGameSuccess)
// 	  .fail(ui.failure);
// };

// const onCreate = function (event) {
//   event.preventDefault();
// 	let data = getFormFields(event.target);
//   api.create(data)
// 	  .done(ui.onStartGameSuccess)
// 	  .fail(ui.failure);
// };

const addHandlers = () => {
	// $('#addnewtitle').on('submit', onNewProject);
  // $('#get-projects').on('submit', onGetProjects);
  // $('#show-project').on('submit', onShowProject);
  // $('.title-display').on('click','.update-project',updateId);
  // $('#updateProjectModal').on('submit', onUpdateProject);
  // $('#show-game').on('click','.delete-project',deleteId);
  // $('#delete-project-button').on('click', onDeleteProject);
  // $('#showusbtn').on('submit', onShowUserStories);
  // $('#createnewstory').on('submit', onCreateUserStory);
  $('#startbutton').on('click', onCreate);


};

module.exports = {
  addHandlers,
};
