# Capstone Project: Full-Stack Application Microwave Wars

Live application: https://viohlet.github.io/microwave-wars-client/

Back-end repository: https://github.com/viohlet/game-rails-api

## About

Microwave Wars is a desktop game built as part of my capstone project at General
Assembly to avoid list apps. We had full freedom and so I decided to do
something a little different. Help Katie push students around and earn points,
so that she is the first one to get to the microwave at lunch and avoid lines.

![Imgur](http://i.imgur.com/3GphNSK.png)

![Imgur](http://i.imgur.com/AklLHHW.png)

## Features

- User Authentication: sign-up, sign-in, sign-out, and change password.
- Spritesheets made with TexturePacker.
- P2 Physics HTML5 Game using the Phaser.js framework.

## Technologies Used

- Front-end: HTML, SCSS/Sass, Javascript, Bootstrap, AJAX, jQuery, Phaser.js,
TexturePacker
- Back-end: Ruby on Rails

## Planning

- Entity Relationship Diagram:
![Imgur](http://i.imgur.com/yuuxuGD.png)

- User Stories:

    - User wants to play a game Microwave Wars.
    - User wants to register and sign-in to her or his own account.
    - User wants to start a game as character ‘katie’ at the GA-14 classroom
    in the new building.
    - User wants to “push” and “kill” the other students to achieve and
    accumulate a higher score before the 30-second limit is up, so that she
    can get to the kitchen’s microwave with no line.

## Development Process

- Because I needed to fulfill requirements, my app has a Ruby on Rails back-end
with user authentication, even though it is not my vision for the game. I want
to spend more time implementing this feature on phaser.js since this framework
can handle it, and makes more sense. So it is functional, but did not want to
make it a requirement for the user to sign-in to see the game. It will stay
simple as of right now until I can grab my userID object on phaser.js.

- I learned how to build a game app using the Phaser.js framework in a week. So
I spent most of my time reading the docs and looking up tutorials. I decided to
go with P2 Physics instead of ARCADE mode because it gave my main character
'katie' a chance to move freely around the classroom and 'push' students around
. Also it allows me to implement really cool features in the future. For
example, when you press the spacebar, she can fire a chair to the students. But
it does not count towards the score because I thought it was too cruel... The
sprites can move on itself because they are using physics so it was fun to work
with that kind of movement.

![Imgur](http://i.imgur.com/HGdpE2x.png)

- I started with the classroom environment and made my own 'student table' on
photoshop based on a photo I saw online. The rest of the sprites are taken from
different corners of the internet. Regarding the students and Katie, they are
all property of Scribblenauts, developed by 5th Cell. So those sprites are not
designed by me (If anyone from the Scribblenauts team happens to stumble upon
humble github page, please let me know if you want these taken down, and I
shall do it at once :p :o T_T), but carefully selected to represent every
single student at my cohort-14 at General Assembly

![Imgur](http://i.imgur.com/Z76oMpF.png?2)

- Working with a new technology is not as easy as it seems, and with a 1-week
deadline, it was terrifying. Please see below one of my funny moments:

![Imgur](http://i.imgur.com/1cr3fu5.png?1)

- Easy and fun to learn how to work with TexturePacker. Phaser.js could access
the JSON hash and the png files were not heavy at all. I used the free version.

![Spritesheet](http://i.imgur.com/6aU1rKn.png)

- This is a simple game that will become an ongoing project, but I am excited
to keep working on it while designing my own characters on Photoshop.

## Unsolved Problems and Next Steps

- Connect my Ruby on Rails back-end with phaser.js, and access my userID
object plus number-of-games-played object within the phaser.js framework, and
not have it on my HTML.
- I would like to implement a Game History feature for each user.
- I need to implement states on the game so you have a menu, game, and
game-over screens. Right now, when the 30-seconds are up, I "kill/destroy" the
phaser object.
- Looking forward to design my own sprites, and make them animated :D
- Also I want to add some features like firing chairs, a tile map of the floor
plan of the General Assembly space, levels, sound, and others. Lots of fun
ideas for my ongoing project!

## Screenshots of App

![Microwave Wars App](http://i.imgur.com/phdALiv.png)
