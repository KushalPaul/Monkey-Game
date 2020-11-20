
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var forest
var ground
var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage= loadImage("forest.jpg")
}



function setup() {
  createCanvas(600,350)
  
  monkey = createSprite(100,300, 20, 20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(0,330,1000,10)
  ground.x = ground.width/2
  ground.velocityX = -6
  bananaGroup = new Group();
}


function draw() {   
  background(225)
  console.log(monkey.y)
   textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate());
   text("Survival Time: "+ survivalTime,250,50);
  
  if(ground.x<600){
    ground.x = ground.width/2  
  }
  
  if(keyDown("space") && monkey.y>=294 ){
    monkey.velocityY  = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8  
  
  monkey.collide(ground)
  spawnBananas();
  spawnObstacles();
drawSprites();
  
 
  
}
function spawnBananas(){
 if(frameCount % 80 === 0){
  banana = createSprite(350,200,10,10)
  banana.addImage(bananaImage)
  banana.y = Math.round(random(180,240))
  banana.lifetime = 120
  banana.scale = 0.1
   banana.velocityX = -10
  bananaGroup.add(banana)
 }
}
function spawnObstacles(){
   if(frameCount % 300 === 0){
    obstacle = createSprite(600,300,50,50)
    obstacle.addImage(obstacleImage)
     obstacle.scale = 0.1
     obstacle.velocityX = -10 
     obstacle.lifetime = 120
   }
}




