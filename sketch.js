
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperos;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperos= new paper(200,200,15,15);
	paperos.shapeColor = "pink"


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paperos.display();
  
  drawSprites();
 
}



