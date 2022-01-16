const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var edges;
var ball,ballpng;
var gs = 1;
var mouseInitialPosX ,mouseInitialPosY;

function preload(){
ballpng = loadImage("Golfball.png");

}

function setup() {
  createCanvas(2500,1000);
  edges = createEdgeSprites();
  engine = Engine.create();


  ball = createSprite(0,0);
  ball.addImage(ballpng);
  ball.scale = 0.1;  
  ball.setCollider('circle',0,0,200);


 // ball.debug = true;
  world = engine.world;
 

}

function draw() 
{
  background("#1dab22");
  
  ball.bounceOff(edges);
  

 

 drawSprites();

}

function mouseClicked(){
  if (gs === 1) {
    
  
  mouseInitialPosX = mouseX;
  mouseInitialPosY = mouseY;

  ball.velocityX = (mouseInitialPosX - ball.x)/10 ;
  ball.velocityY = (mouseInitialPosY - ball.y)/10 ;
  gs = 2;
}
  }
