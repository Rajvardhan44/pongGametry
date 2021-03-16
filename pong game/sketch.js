var database;
var gameState = 0;
var playerCount = 0;
var gameState = 0;

var form,player,game;
var allPlayers,players;
var playerPaddle1,playerPaddle2,ball;
var backgroundImag

function setup(){
    createCanvas(1000, 600);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
   
}

function draw(){
    background("green");
    
 if (playerCount === 2) {
  game.update(1);
}
if (gameState === 1) {
  clear(); 
  game.play();
}
//if (gameState === 2) {
 
//   game.end();
// }

    drawSprites();
}

