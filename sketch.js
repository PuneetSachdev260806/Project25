
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*dustbin = new Dustbin(200,400);
	paper = new Paper(100,100,60);
	ground = new Ground(400,690,800,20);*/
	dustbin = new Dustbin(600,300);
	paper = new Paper(200,200,40);
	ground = new Ground(width/2,390,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW)
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
}


