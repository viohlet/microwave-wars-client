'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);


// const api = require('./api');
// const ui = require('./ui');

// let Phaser;

const game = new Phaser.Game(800, 600, Phaser.AUTO, '',{
  preload: preload,
  create: create,
  update: update
});


function preload(){
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = '#000';
  game.load.image('ground', './assets/scripts/game/images/ground.jpg');
  game.load.atlasJSONHash(
    'sprites',
    './assets/scripts/game/images/spritesheet.png',
    './assets/scripts/game/images/spritesheet.json'
  );
}

let cursors;
let katie;
// let ground;
// let body;

function create() {

  let ground = game.add.image(0, 0, 'ground');
  // ground.fixedToCamera = true;

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

  game.physics.p2.defaultRestitution = 0.8;

  // main character
  katie = game.add.sprite (650, 210, 'sprites','katie.png');
  game.physics.p2.enable(katie);

  katie.body.setZeroDamping();
	katie.body.fixedRotation = true;


  //tables
  let table1 = game.add.sprite (430, 155, 'sprites', 'projector.png');
  let table2 = game.add.sprite (45, 155, 'sprites', 'projector.png');
  let table3 = game.add.sprite (390, 280, 'sprites', 'projector.png');
  let table4 = game.add.sprite (0, 280, 'sprites', 'projector.png');
  let table5 = game.add.sprite (200, 390, 'sprites', 'projector.png');
  let table6 = game.add.sprite (430, 495, 'sprites', 'projector.png');
  let table7 = game.add.sprite (400, 60, 'sprites', 'projector.png');

  //door
  let door = game.add.sprite (2, 500, 'sprites', 'door.png');

  katie.scale.setTo(0.4,0.4);
  table1.scale.setTo(0.6,0.3);
  table2.scale.setTo(0.6,0.3);
  table3.scale.setTo(0.6,0.3);
  table4.scale.setTo(0.6,0.3);
  table5.scale.setTo(0.6,0.3);
  table6.scale.setTo(0.6,0.3);
  table7.scale.setTo(0.4,0.3);
  door.scale.setTo(0.5,0.5);
  // students.scale.setTo(0.4,0.4);

  game.physics.p2.enable([ table1, table2, table3, table4, table5, table6, table7, door ]);

  //make static
  table1.body.static = true;
  table2.body.static = true;
  table3.body.static = true;
  table4.body.static = true;
  table5.body.static = true;
  table6.body.static = true;
  table7.body.static = true;
  door.body.static = true;

  cursors = game.input.keyboard.createCursorKeys();

}


function update() {

  // let cursors = game.input.keyboard.createCursorKeys();

  katie.body.setZeroVelocity();

  if (cursors.left.isDown)
    {
      katie.body.moveLeft(200);
    }
  else if (cursors.right.isDown)
    {
      katie.body.moveRight(200);
    }
  if (cursors.up.isDown)
    {
      katie.body.moveUp(200);
    }
  else if (cursors.down.isDown)
    {
      katie.body.moveDown(200);
    }
  // if (!game.camera.atLimit.x)
  // {
  //   ground.tilePosition.x += (katie.body.velocity.x * 16) * game.time.physicsElapsed;
  // }
  // if (!game.camera.atLimit.y)
  // {
  //   ground.tilePosition.y += (katie.body.velocity.y * 16) * game.time.physicsElapsed;
  // }
}
