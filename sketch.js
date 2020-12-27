
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20)

	rectangle1=new Rectangle(700,640,20,60)
	rectangle2=new Rectangle(550,640,20,60)
	rectangle3=new Rectangle2(625,680,20,60)
	
paper=new Paper(100,300,20)
	
	  
	 
	 
	Engine.run(engine);
  
}


function draw() {
	background("black")
  rectMode(CENTER);
  background(0);
  
paper.display()
  ground.display()

  rectangle1.display()
  rectangle2.display()
  rectangle3.display()
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:55,y:-60
		})
	}
}



