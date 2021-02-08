
var monkey ,monkeyImage, monkey_running;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage, obstacleGroup;
var bananaGroup;
var score;
var ground, invisibleGround;
var survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

 
}



function setup() {
  
  monkey = createSprite(40,300,20,20);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,340,1200,20);
  ground.x = ground.width /2;
  ground.velocityX = 0
  
  invisibleGround = createSprite(40,340,20,20);
  invisibleGround.visible = false;
  
    bananaGroup = new Group();
    obstacleGroup = new Group();
}


function draw() {
background(180);
  
  if (ground.x < 0){
      ground.x = ground.width/2;

    }
  ground.velocityX = -3;
  
  if(keyDown("space") && monkey.y >= 230) {
      monkey.velocityY = -10;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
  if(frameCount % 60 === 0) {
    var banana = createSprite(430,200,10,40);
    banana.velocityX = -6;
    banana.y = Math.round(random(180,260));
    banana.lifetime = 70;
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    bananaGroup.add(banana);
    
    monkey.depth = banana.depth+1;
  }
  
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(430,320,10,40);
    obstacle.velocityX = -6;
    obstacle.lifetime = 70;
    obstacle.scale = 0.1;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    
    ground.depth = obstacle.depth + 1;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50);


  drawSprites();
}






