// 'use strict';
//
//
// let game = new Phaser.Game(800, 600, Phaser.CANVAS, 'showgame', {
//   preload: preload,
//   create: create,
//   update: update,
//   render: render,
// });
// 
//
// function preload () {
//   game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//   game.scale.pageAlignHorizontally = true;
//   game.scale.pageAlignVertically = true;
//   game.stage.backgroundColor = '#000';
//   game.load.image('ground', './assets/scripts/game/images/ground.jpg');
//   game.load.image('star', 'assets/scripts/game/images/star.png');
//   game.load.image('sadmicrowave', 'assets/scripts/game/images/sadmicrowave.png');
//   game.load.atlasJSONHash(
//     'sprites',
//     './assets/scripts/game/images/spritesheet-mini.png',
//     './assets/scripts/game/images/spritesheet-mini.json'
//   );
//   game.load.atlasJSONHash(
//     'enemies',
//     './assets/scripts/game/images/students.png',
//     './assets/scripts/game/images/students.json'
//   );
// }
//
// let sadmicrowave;
// let katie;
// let students;
// let tables;
// let cursors;
// let score = 0;
// let scoreText;
// let timerText;
// let weapon;
// let fireButton;
// let table1;
// let showgame = document.getElementById('showgame');
// let scorediv = document.getElementById('scorediv');
// let scorelabel = document.getElementById('label');
//
// function create() {
//
//   let ground = game.add.image(0, 0, 'ground');
//   ground.fixedToCamera = true;
//
//
//   //	Enable p2 physics
// 	game.physics.startSystem(Phaser.Physics.P2JS);
//
//   game.physics.p2.setImpactEvents(true);
//
//   game.physics.p2.defaultRestitution = 0.8;
//
//   // Collission Groups
//   let playerCollisionGroup = game.physics.p2.createCollisionGroup();
//   let studentCollisionGroup = game.physics.p2.createCollisionGroup();
//   let table1CollisionGroup = game.physics.p2.createCollisionGroup();
//
//   game.physics.p2.updateBoundsCollisionGroup();
//
//   let x = game.world.randomX;
//   let y = game.world.randomY;
//
//   //weapon - does not work yet
//   weapon = game.add.weapon(30, 'sprites', 'chair.png');
//
//   weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
//   weapon.bulletSpeed = 500;
//   weapon.fireRate = 600;
//
//   // main character
//   katie = game.add.sprite (700, 300, 'sprites','katie.png');
//
//   game.physics.p2.enable(katie);
//   katie.body.setCircle(30);
//   katie.body.setZeroDamping();
//   katie.scale.x *= -1;
//
//   katie.anchor.set(0.5);
// 	katie.body.fixedRotation = true;
//   katie.smoothed = false;
//
//   katie.body.setCollisionGroup(playerCollisionGroup);
//   katie.body.collides(studentCollisionGroup, hitStudent);
//   katie.body.collides(table1CollisionGroup, hitTable);
//
//   game.camera.follow(katie);
//
//   weapon.trackSprite(katie, 0, 0, true);
//
//   fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
//
//   let students = game.add.group();
//   students.enableBody = true;
//   students.physicsBodyType = Phaser.Physics.P2JS;
//   students.smoothed = false;
//
//   for (let i = 0; i < 23; i++)
//   {
//     // let student = students.create(190 + 69 * i, -90, 'enemies', i);
//     let student = students.create(x, y, 'enemies', i);
//     student.body.setRectangle(30,30, 0, 0, 4);
//
//     student.body.setZeroDamping();
//
//     student.body.fixedRotation = true;
//     student.body.setCollisionGroup(studentCollisionGroup);
//     student.body.collides([ studentCollisionGroup, playerCollisionGroup, table1CollisionGroup ]);
//   }
//
//   students.setAll('inputEnabled', true);
//   students.setAll('input.useHandCursor', true);
//
//   let tables = game.add.physicsGroup();
//   tables.enableBody = true;
//   tables.physicsBodyType = Phaser.Physics.P2JS;
//   tables.smoothed = false;
//    //
//   for (let i = 0; i < 100; i++)
//   {
//     let table1 = tables.create(x, y, 'sprites', 'table.png');
//     table1.body.setRectangle(10,10, 0, 0, 0);
//     table1.body.setZeroDamping();
//     table1.body.setCollisionGroup(table1CollisionGroup);
//     table1.body.collides([ studentCollisionGroup, playerCollisionGroup ]);
//     }
//
//   let door = game.add.sprite (20, 500, 'sprites', 'door.png');
//
//   cursors = game.input.keyboard.createCursorKeys();
//
//   scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
//
//   timerText = game.add.text(530, 16, 'Time: ', { fontSize: '32px', fill: '#000' });
//   game.time.events.add(Phaser.Timer.SECOND * 30, fadePicture);
// }
//
//   function hitStudent(katie, student) {
//     // student.health = 2;
//     // for each {student.sprite.alpha -= 0.5};
//     student.sprite.alpha -= 1;
//     score += 10;
//     student.destroy();
//   }
//
//   function hitTable(katie, table1) {
//     // student.health = 2;
//     // for each {student.sprite.alpha -= 0.5};
//     table1.sprite.alpha -= 0.5;
//   }
//
// // GAME OVER
// function gameover () {
//   game.destroy();
//   console.log('game destroyed');
// }
//
// function fadePicture() {
//   game.add.tween(katie).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
//   game.add.tween(scoreText).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
//   }
//
// function update() {
//
//   katie.body.setZeroVelocity();
//
//   if (cursors.left.isDown)
//     {
//       katie.body.moveLeft(350);
//     }
//   else if (cursors.right.isDown)
//     {
//       katie.body.moveRight(350);
//     }
//   if (cursors.up.isDown)
//     {
//       katie.body.moveUp(350);
//     }
//   else if (cursors.down.isDown)
//     {
//       katie.body.moveDown(350);
//     }
//   if (fireButton.isDown)
//     {
//     weapon.fire();
//     }
// }
//
//
// function render() {
//   scoreText.text = 'Score: ' + score;
//   timerText.text = 'Time Left: ' + game.time.events.duration;
//   if (
//     game.time.events.duration === 0
//   ) {
//     gameover();
//   }
// }




// 'use strict';
//
// // const main = require('./main');
//
// let game = new Phaser.Game(800, 600, Phaser.CANVAS, 'showgame', {
//   preload: preload,
//   create: create,
//   update: update,
//   render: render,
// });
//
//
// function preload () {
//   game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//   game.scale.pageAlignHorizontally = true;
//   game.scale.pageAlignVertically = true;
//   game.stage.backgroundColor = '#000';
//   game.load.image('ground', './assets/scripts/game/images/ground.jpg');
//   game.load.atlasJSONHash(
//     'sprites',
//     './assets/scripts/game/images/spritesheet-mini.png',
//     './assets/scripts/game/images/spritesheet-mini.json'
//   );
//   game.load.atlasJSONHash(
//     'enemies',
//     './assets/scripts/game/images/students.png',
//     './assets/scripts/game/images/students.json'
//   );
//   // main.onCreate();
// }
//
// let katie;
// let students;
// let cursors;
// let score = 0;
// let scoreText;
// let timerText;
// let weapon;
// let fireButton;
// let table1;
// let showgame = document.getElementById('showgame');
// let scorediv = document.getElementById('scorediv');
// let scorelabel = document.getElementById('label');
//
// function create() {
//
//   let ground = game.add.image(0, 0, 'ground');
//   ground.fixedToCamera = true;
//
//   //	Enable p2 physics
// 	game.physics.startSystem(Phaser.Physics.P2JS);
//
// // Turn on impact events for the world, without this we get no collision callbacks
//   game.physics.p2.setImpactEvents(true);
//
//   game.physics.p2.defaultRestitution = 0.8;
//
//   // Collission Groups
//   let playerCollisionGroup = game.physics.p2.createCollisionGroup();
//   let studentCollisionGroup = game.physics.p2.createCollisionGroup();
//   // let lilTableCollisionGroup = game.physics.p2.createCollisionGroup();   //// Trying tables collision
//
//   // Objects with their own collision groups still collide with the world bounds:
//   game.physics.p2.updateBoundsCollisionGroup();
//
//   // random location
//   let x = game.world.randomX;
//   let y = game.world.randomY;
//
//   //weapon
//   weapon = game.add.weapon(30, 'sprites', 'chair.png');
//   //merpy merp bullets are killed
//   weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
//   weapon.bulletSpeed = 500;
//   weapon.fireRate = 600;
//
//
//   // main character
//   katie = game.add.sprite (700, 300, 'sprites','katie.png');
//
//   game.physics.p2.enable(katie);
//   katie.body.setCircle(30);
//   katie.body.setZeroDamping();
//   katie.scale.x *= -1;
//
//   katie.anchor.set(0.5);
// 	katie.body.fixedRotation = true;
//   katie.smoothed = false;
//
//   katie.body.setCollisionGroup(playerCollisionGroup);
//   katie.body.collides(studentCollisionGroup);
//
//   game.camera.follow(katie);
//
//   weapon.trackSprite(katie, 0, 0, true);
//
//   fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
//
//   let students = game.add.group();
//   students.enableBody = true;
//   students.physicsBodyType = Phaser.Physics.P2JS;
//   students.smoothed = false;
//
//   for (let i = 0; i < 23; i++)
//   {
//     // let student = students.create(190 + 69 * i, -90, 'enemies', i);
//     let student = students.create(x, y, 'enemies', i);
//     student.body.setRectangle(30,30, 0, 0, 4);
//     // student.body.setCircle(30);
//     // student.health = 2;
//     student.body.setZeroDamping();
//
//     student.body.fixedRotation = true;
//     student.body.setCollisionGroup(studentCollisionGroup);
//     student.body.collides([ studentCollisionGroup, playerCollisionGroup ]);
//   }
//
//   students.setAll('inputEnabled', true);
//   students.setAll('input.useHandCursor', true);
//   students.forEach(function(student) {
//     student.events.onInputDown.add(listener, this);
//   });
//
//   let table1 = game.add.sprite (662, 170, 'sprites', 'table.png');
//   // table1.BodyDebug.body.collides(playerCollisionGroup, studentCollisionGroup);
//   // game.physics.p2.enable(table1);
//   let table2 = game.add.sprite (624, 170, 'sprites', 'table.png');
//   let table3 = game.add.sprite (562, 170, 'sprites', 'table.png');
//   let table4 = game.add.sprite (512, 170, 'sprites', 'table.png');
//   let table5 = game.add.sprite (300, 190, 'sprites', 'table.png');
//   let table6 = game.add.sprite (262, 190, 'sprites', 'table.png');
//   let table7 = game.add.sprite (212, 190, 'sprites', 'table.png');
//   let table8 = game.add.sprite (150, 190, 'sprites', 'table.png');
//   let table9 = game.add.sprite (750, 300, 'sprites', 'table.png');
//   let table10 = game.add.sprite (700, 300, 'sprites', 'table.png');
//   let table11 = game.add.sprite (650, 300, 'sprites', 'table.png');
//   let table12 = game.add.sprite (500, 300, 'sprites', 'table.png');
//   let table13 = game.add.sprite (450, 300, 'sprites', 'table.png');
//   let table14 = game.add.sprite (200, 400, 'sprites', 'table.png');
//   let table15 = game.add.sprite (150, 350, 'sprites', 'table.png');
//   let table16 = game.add.sprite (100, 300, 'sprites', 'table.png');
//   let table17 = game.add.sprite (40, 250, 'sprites', 'table.png');
//   let table18 = game.add.sprite (700, 450, 'sprites', 'table.png');
//   let table19 = game.add.sprite (650, 450, 'sprites', 'table.png');
//   let table20 = game.add.sprite (600, 450, 'sprites', 'table.png');
//   let table21 = game.add.sprite (550, 450, 'sprites', 'table.png');
//   let table22 = game.add.sprite (350, 515, 'sprites', 'table.png');
//   let table23 = game.add.sprite (300, 515, 'sprites', 'table.png');
//   let table24 = game.add.sprite (250, 515, 'sprites', 'table.png');
//   let table25 = game.add.sprite (200, 515, 'sprites', 'table.png');
//   let table26 = game.add.sprite (600, 50, 'sprites', 'table.png');
//   let table27 = game.add.sprite (550, 50, 'sprites', 'table.png');
//   let table28 = game.add.sprite (700, 170, 'sprites', 'table.png');
//   //door
//   let door = game.add.sprite (20, 500, 'sprites', 'door.png');
//
//   game.physics.p2.enable([ table1, table2, table3, table4, table5, table6,
//                            table7, table8, table9, table10, table11, table12,
//                            door, table13, table14, table15, table16, table17,
//                            table18, table19, table20, table21, table22, table23,
//                            table24, table25, table26, table27, table28
//                         ]);
//
//   table1.body.static = true;
//
//
//   cursors = game.input.keyboard.createCursorKeys();
//
//   scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
//
//   timerText = game.add.text(560, 16, 'Time: ', { fontSize: '32px', fill: '#000' });
//   game.time.events.add(Phaser.Timer.SECOND * 30, fadePicture);
// }
//
//
//   // function hitStudent(katie, student) {
//     // student.health = 2;
//     // for each {student.sprite.alpha -= 0.5};
//     // student.sprite.alpha -= 0.5;
//     // score += 10;
//     // student.destroy();
//   // }
//
// // GAME OVER
// function gameover () {
//   game.destroy();
// }
//
//
// function fadePicture() {
//   game.add.tween(katie).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
//   game.add.tween(scoreText).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
//
//   let nameLabel = game.add.text(80, 80, 'GAME OVER. Click on a Student to Continue',
//                                 {font: '24px Arial', fill: '#ffffff'});
//   }
//
// function update() {
//
//   katie.body.setZeroVelocity();
//
//   if (cursors.left.isDown)
//     {
//       katie.body.moveLeft(350);
//     }
//   else if (cursors.right.isDown)
//     {
//       katie.body.moveRight(350);
//     }
//   if (cursors.up.isDown)
//     {
//       katie.body.moveUp(350);
//     }
//   else if (cursors.down.isDown)
//     {
//       katie.body.moveDown(350);
//     }
//   if (fireButton.isDown)
//     {
//     weapon.fire();
//     }
// }
//
//
// function render() {
//   scoreText.text = 'Score: ' + score;
//   timerText.text = 'Time Left: ' + game.time.events.duration;
// }
//
//
// function listener (sprite, pointer) {
//   console.log(score);
//   score += 10;
//   console.log("score is ", score);
//   sprite.destroy();
//   // fire ajax PATCH request to game
//   // how do we get game id?
//   if (
//     game.time.events.duration === 0
//   ) {
//     gameover();
//   }
// }
//
//
//
//
// game.state.add('Main', Main);
// game.state.start('Main');
