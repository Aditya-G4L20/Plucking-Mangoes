
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);

	boy1 = new Boy(200,300,60,60);

	stone = new Stone(200,300,60,60);

	tree = new Tree(600,300,50,100);

	mango1 = new Mango(640,340,10,10);
	mango2 = new Mango(630,300,10,10);
	mango3 = new Mango(620,300,10,10);
	mango4 = new Mango(640,200,10,10);
	mango5 = new Mango(630,250,10,10);
	mango6 = new Mango(620,240,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body)
	}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
}

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance = lmango.r + lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}


