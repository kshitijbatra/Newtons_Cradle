
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var bobDiameter=50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/3,20);
	bobObject1 = new Bob(100,500,50);
	bobObject2 = new Bob(200,500,50);
	bobObject3 = new Bob(300,500,50);
	bobObject4 = new Bob(400,500,50);
	bobObject5 = new Bob(500,500,50);
	rope1= new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0);
	rope2= new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0);
	rope3= new Rope(bobObject3.body,roof.body,-bobDiameter*0, 0);
	rope4= new Rope(bobObject4.body,roof.body,bobDiameter*1, 0);
	rope5= new Rope(bobObject5.body,roof.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();


 
}
function drawLine(constraint) { bobBodyPosition=constraint.bodyA.position 
roofBodyPosition=constraint.bodyB.position 
roofBodyOffset=constraint.pointB;
roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
 }
 }


