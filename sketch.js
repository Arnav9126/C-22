//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //Matter.Bodies.rectangle(x, y, width, height, [options]) → Body

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 370, 400, 30, options);
  World.add(world, ground);

  var ball_options = {
    restitution: 1
  } 

  ball = Bodies.circle(100,60,30,ball_options); 
  World.add(world, ball);

  console.log(ground);
 
}

function draw() {
  background("black");  

  Engine.update(engine);

  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,30);

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,30);
}