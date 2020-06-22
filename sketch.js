var canvas,bgImg,playerCount,database,form,player,game;
var gameState = 0;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1img,car2img,car3img,car4img,track,ground;
function preload(){
    car1img = loadImage('car1.png');
    car2img = loadImage('car2.png');
    car3img = loadImage('car3.png');
    car4img = loadImage('car4.png');
    track = loadImage('track.jpg');
    ground = loadImage('ground.png');
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}
function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState == 2){
        game.end();
    }
    
}