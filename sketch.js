const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var engine , world;
var ground , ball; 

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
//step1 physics rules to be followed
  var ground_options = {
  isStatic:true,
  }
  //step2 physics body to be created and physics rules to be added
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  //step3 adding object to world
  World.add(world,ground)
  createSprite(400, 200, 50, 50);
  var ball_option = {
    restitution: 0.5

  }
  ball = Bodies.circle(250,200,30,ball_option);
  World.add(world,ball);

} 



function draw() {
  background("blue");
  Engine.update (engine) 
  rectMode (CENTER)
  ellipseMode(RADIUS)
  fill ("pink")
  //step4 displaying object on screen
  rect(ground.position.x,ground.position.y,800,20) 
  fill('orange')
  ellipse(ball.position.x,ball.position.y,50,30)
  drawSprites();
}