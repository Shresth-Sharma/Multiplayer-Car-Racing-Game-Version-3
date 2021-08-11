var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s,i;
var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img,track1;
var time = 200;
var time1 = 200;
var value;

function preload(){
    s=loadSound("sound/sliding.mp3")
f2 = loadImage("images/f1.png");
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronze_img = loadImage("images/bronze.png");
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
  track1 = loadImage("images/track1.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
    for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
 
  

}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
 
  //start the game
  if (playerCount === 2 && finishedPlayers === 0 && time>0) {
    time =time - 1
    textSize(50);
    text(time,500,500)
  }
if(time<1){
  game.update(1);
}
  //start the game for real
  if (gameState === 1) {
    game.play();
  }
  
  //end the game
  if (finishedPlayers === 2) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 2 && time1>0) {
    game.displayRanks();
     time1 =time1 - 1
  }
  if(time1 <1){
    player.updateCount(0);
    game.update(0);
  
  database.ref("/").update({
    players: null,
    finishedPlayers: 0,
  });
  }
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}
