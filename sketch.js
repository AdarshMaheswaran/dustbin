
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 300);
    background(255);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    paper=new Paper(400,100,10,10);
	box=new Box(400,390,40,10);
	box1=new Box(380,380,10,20)
	box2=new Box(420,390,10,20)
     
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  box.display();
  box1.display();
  box2.display();
  drawSprites();
}



