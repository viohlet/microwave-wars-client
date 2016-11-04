'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);


// const api = require('./api');
// const ui = require('./ui');

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
  // game.load.spritesheet('rest_st_01', './assets/scripts/game/images/spritesheet-mw.png', 32, 48);
  game.load.atlasJSONHash(
    'sprites',
    './assets/scripts/game/images/spritesheet-mw.png',
    './assets/scripts/game/images/spritesheet-mw.json'
  );
  game.load.image('door', './assets/scripts/game/images/door.png');

}

let cursors;


function create() {

  // // Enable P2
  // game.physics.startSystem(Phaser.Physics.P2JS);
  //
  // game.physics.p2.setImpactEvents(true);
  //
  // game.physics.p2.restitution = 0.8;
  //
  // let playerCollisionGroup = game.physics.p2.createCollisionGroup();
  // let studentsCollisionGroup = game.physics.p2.createCollisionGroup();
  //
  // game.physics.p2.updateBoundsCollisionGroup();

  let ground = game.add.image(0, 0, 'ground');

   let katie = game.add.sprite (
     650,
     210,
     'sprites',
     'rest_st_03.png'
   );

   let table1 = game.add.sprite (
     430,
     155,
     'sprites',
     'projector.png'
   );

   let table2 = game.add.sprite (
     45,
     155,
     'sprites',
     'projector.png'
   );

   let table3 = game.add.sprite (
     390,
     280,
     'sprites',
     'projector.png'
   );

   let table4 = game.add.sprite (
     0,
     280,
     'sprites',
     'projector.png'
   );

   let table5 = game.add.sprite (
     200,
     390,
     'sprites',
     'projector.png'
   );

   let table6 = game.add.sprite (
     430,
     495,
     'sprites',
     'projector.png'
    );

    let table7 = game.add.sprite (
      400,
      60,
      'sprites',
      'projector.png'
     );

    let door = game.add.image (
      2,
      500,
      'door'
    );



  katie.scale.setTo(0.08,0.08);
  table1.scale.setTo(0.6,0.3);
  table2.scale.setTo(0.6,0.3);
  table3.scale.setTo(0.6,0.3);
  table4.scale.setTo(0.6,0.3);
  table5.scale.setTo(0.6,0.3);
  table6.scale.setTo(0.6,0.3);
  table7.scale.setTo(0.4,0.3);
  door.scale.setTo(0.5,0.5);

//make static
  table1.body.static = true;
  table2.body.static = true;
  table3.body.static = true;
  table4.body.static = true;
  table5.body.static = true;
  table6.body.static = true;
  table7.body.static = true;
  door.body.static = true;



}

function update() {
}
