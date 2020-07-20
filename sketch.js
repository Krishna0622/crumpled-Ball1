
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	 ball1 = new Ball(200,650,30);
	 trashcan1 = new Block(500,630,10,50);
	 trashcan2 = new Block(575,670,150,10);
	 trashcan3 = new Block(650,630,10,50);
	 ground = new Block(400,700,800,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		ball1.velocityX=10;
		ball1.velocityY=-10;
	}
}

