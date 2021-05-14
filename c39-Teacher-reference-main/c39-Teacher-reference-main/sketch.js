var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var benz, benz1, benz2, benz3, benz4
var road
var highway

function preload(){
   benz1 = loadImage("images/car1.png")
   benz2 = loadImage("images/car2.png")
   benz3 = loadImage("images/car3.png")
   benz4 = loadImage("images/car4.png")
   road = loadImage("images/ground.png")
   highway = loadImage("images/track.jpg") 

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
