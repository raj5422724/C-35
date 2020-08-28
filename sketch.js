var gameState = 0;
var playerCount,db;
var form,game,player;

function setup(){
  createCanvas(400,400);
  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  drawSprites();
  
}