
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400) ;
  
//creating monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
}


function draw() {
background("green")
 drawSprites() ;
  monkey.collide(ground)
  if(ground.x<0){
    ground.x=300;
  }
 if(keyDown("space")){
  monkey.velocityY=-4 
 }  
 
 Spawnbanana() ; 
  monkey.velocityY=monkey.velocityY+0.5; 
}

function Spawnbanana(){
if(frameCount % 60 === 0){
  banana=createSprite(400,200,20,20)
  banana.addImage(bananaImage);
  banana.velocityX=-4
  banana.scale=0.1
}
}




