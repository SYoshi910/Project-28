var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var counter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	ground = new Ground();
	 //World.add(world, ground);
	counter = 0;
	can1 = new Box(545,585,25,120);
	can2 = new Box(655,585,25,120);
	can3 = new Box2(600,600,150,150);
	ball = new Paper(50,670,60);
	launcher = new Launch(ball.body,{x:100,y:50});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("purple");
  ground.display();
  can1.display();
  can2.display();
  can3.display();
  ball.display();
  launcher.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode == UP_ARROW && counter == 0){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-250});
		//counter += 1;
	}
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}


