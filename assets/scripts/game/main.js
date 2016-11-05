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
let ground;
// let body;

function create() {

  let ground = game.add.image(0, 0, 'ground');
  ground.fixedToCamera = true;

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

  game.physics.p2.defaultRestitution = 0.8;

  // main character
  katie = game.add.sprite (650, 390, 'sprites','katie.png');
  game.physics.p2.enable(katie);
  katie.body.setCircle(30);

  katie.body.setZeroDamping();
	katie.body.fixedRotation = true;


  //tables
  let table1 = game.add.sprite (650, 170, 'sprites', 'table.png');
  let table2 = game.add.sprite (600, 170, 'sprites', 'table.png');
  let table3 = game.add.sprite (550, 170, 'sprites', 'table.png');
  let table4 = game.add.sprite (500, 170, 'sprites', 'table.png');
  let table5 = game.add.sprite (300, 190, 'sprites', 'table.png');
  let table6 = game.add.sprite (250, 190, 'sprites', 'table.png');
  let table7 = game.add.sprite (200, 190, 'sprites', 'table.png');
  let table8 = game.add.sprite (150, 190, 'sprites', 'table.png');
  let table9 = game.add.sprite (750, 300, 'sprites', 'table.png');
  let table10 = game.add.sprite (700, 300, 'sprites', 'table.png');
  let table11 = game.add.sprite (650, 300, 'sprites', 'table.png');
  let table12 = game.add.sprite (500, 300, 'sprites', 'table.png');
  let table13 = game.add.sprite (450, 300, 'sprites', 'table.png');
  let table14 = game.add.sprite (200, 400, 'sprites', 'table.png');
  let table15 = game.add.sprite (150, 350, 'sprites', 'table.png');
  let table16 = game.add.sprite (100, 300, 'sprites', 'table.png');
  let table17 = game.add.sprite (40, 250, 'sprites', 'table.png');
  let table18 = game.add.sprite (700, 450, 'sprites', 'table.png');
  let table19 = game.add.sprite (650, 450, 'sprites', 'table.png');
  let table20 = game.add.sprite (600, 450, 'sprites', 'table.png');
  let table21 = game.add.sprite (550, 450, 'sprites', 'table.png');
  let table22 = game.add.sprite (350, 515, 'sprites', 'table.png');
  let table23 = game.add.sprite (300, 515, 'sprites', 'table.png');
  let table24 = game.add.sprite (250, 515, 'sprites', 'table.png');
  let table25 = game.add.sprite (200, 515, 'sprites', 'table.png');
  let table26 = game.add.sprite (600, 50, 'sprites', 'table.png');
  let table27 = game.add.sprite (550, 50, 'sprites', 'table.png');
  //door
  let door = game.add.sprite (20, 500, 'sprites', 'door.png');

  katie.scale.setTo(0.4,0.4);
  table1.scale.setTo(0.5,0.5);
  table2.scale.setTo(0.5,0.5);
  table3.scale.setTo(0.5,0.5);
  table4.scale.setTo(0.5,0.5);
  table5.scale.setTo(0.5,0.5);
  table6.scale.setTo(0.5,0.5);
  table7.scale.setTo(0.5,0.5);
  table8.scale.setTo(0.5,0.5);
  table9.scale.setTo(0.5,0.5);
  table10.scale.setTo(0.5,0.5);
  table11.scale.setTo(0.5,0.5);
  table12.scale.setTo(0.5,0.5);
  table13.scale.setTo(0.5,0.5);
  table14.scale.setTo(0.5,0.5);
  table15.scale.setTo(0.5,0.5);
  table16.scale.setTo(0.5,0.5);
  table17.scale.setTo(0.5,0.5);
  table18.scale.setTo(0.5,0.5);
  table19.scale.setTo(0.5,0.5);
  table20.scale.setTo(0.5,0.5);
  table21.scale.setTo(0.5,0.5);
  table22.scale.setTo(0.5,0.5);
  table23.scale.setTo(0.5,0.5);
  table24.scale.setTo(0.5,0.5);
  table25.scale.setTo(0.5,0.5);
  table26.scale.setTo(0.5,0.5);
  table27.scale.setTo(0.5,0.5);
    //door
  door.scale.setTo(0.5,0.5);
  // students.scale.setTo(0.4,0.4);

  game.physics.p2.enable([ table1, table2, table3, table4, table5, table6,
                           table7, table8, table9, table10, table11, table12,
                           door, table13, table14, table15, table16, table17,
                           table18, table19, table20, table21, table22, table23,
                           table24, table25, table26, table27 ]);

  //make static
  table1.body.static = true;
  table2.body.static = true;
  table3.body.static = true;
  table4.body.static = true;
  table5.body.static = true;
  table6.body.static = true;
  table7.body.static = true;
  table8.body.static = true;
  table9.body.static = true;
  table10.body.static = true;
  table11.body.static = true;
  table12.body.static = true;
  table13.body.static = true;
  table14.body.static = true;
  table15.body.static = true;
  table16.body.static = true;
  table17.body.static = true;
  table18.body.static = true;
  table19.body.static = true;
  table20.body.static = true;
  table21.body.static = true;
  table22.body.static = true;
  table23.body.static = true;
  table24.body.static = true;
  table25.body.static = true;
  table26.body.static = true;
  table27.body.static = true;
  //door
  door.body.static = true;

  // table9.body.setZeroDamping();
	// table9.body.fixedRotation = true;

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
