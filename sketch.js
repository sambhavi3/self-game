var path, boy, cash, diamonds, jewellery, sword; 
var cashG, diamondsG, jewelleryG, swordG; 
var pathImg, boyImg, cashImg, jewelleryImg, swordImg, endImg, diamondsImg;
var PLAY=1;
var END=0;
var gameState=1;
var treasureCollection=0;

function preload() {
pathImg= loadImage("Road.png");
boyImg= loadAnimation("Runner-1.png","Runner-2.png");
cashImg= loadImage("cash.png");
jewelleryImg= loadImage("jwell.png");
swordImg= loadImage("sword.png");
endImg= loadAnimation("gameOver.png");
diamondsImg= loadImage("diamond.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  path= createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY=4;

  boy= createSprite(width/2, height-20, 20, 20);
  boy.addAnimation("boyRunning",boyImg);
  boy.scale= 0.15;
  

  cashG=new Group();
  diamondsG= new Group();
  jewelleryG= new Group();
  swordG= new Group();
  
}
function draw() {
 if(gameState===PLAY){
 background(0);
 boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

  if(path.y>height){
    path.y=height/2;

  }
  createCash();
  createDiamonds();
  createJewellery();
  createSword();

  if(cashG.isTouching(boy)){
  cashG.destroyEach();
  treasureCollection= treasureCollection+100;
  }
else if(diamondsG.isTouching(boy)){
  diamondsG.destroyEach();
  treasureCollection= treasureCollection+150;
}
else if(jewelleryG.isTouching(boy)){
  jewelleryG.destroyEach();
  treasureCollection=treasureCollection+200;
}
else{
if(swordG.isTouching(boy)){
  gameState=END;

  diamondsG.destroyEach();
  jewelleryG.destroyEach();
  cashG.destroyEach();
  swordG.destroyEach();

  cashG.setVelocityEach(0);
  diamondsG.setVelocityEach(0);
  jewelleryG.setVelocityEach(0);
  swordG.setVelocityEach(0);
boy.addAnimation("boyRunning",endImg);
boy.x=500;
boy.y=300;
boy.scale=0.6;
}
}
drawSprites();

textSize(30);
fill(255);
text("Treasure:"+treasureCollection, 1000, 100);
 }
}
function createCash(){
  if(World.frameCount%200==0){
    var cash= createSprite(Math.round(random(50, width-50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.velocityY=3;
    cash.lifetime=200;
    cash.scale=0.18;
    cashG.add(cash);

  }
}
  function createDiamonds(){
    if(World.frameCount%240==0){
      var diamonds= createSprite(Math.round(random(50, width-50), 40, 10, 10));
      diamonds.addImage(diamondsImg);
      diamonds.velocityY=3;
      diamonds.lifetime=200;
      diamonds.scale=0.05;
      diamondsG.add(diamonds);
    }
  }

  function createJewellery(){
    if(World.frameCount%320==0){
      var jewellery= createSprite(Math.round(random(50, width-50), 40, 10, 10));
      jewellery.addImage(jewelleryImg);
      jewellery.velocityY=3;
      jewellery.lifetime=200;
      jewellery.scale=0.19;
      jewelleryG.add(jewellery);

    }
  }

  function createSword(){
    if(World.frameCount%540==0){
      var sword= createSprite(Math.round(random(50, width-50),40, 10, 10));
      sword.addImage(swordImg);
      sword.velocityY=3;
      sword.lifetme=200;
      sword.scale=0.2;
      swordG.add(sword);
    }
  }