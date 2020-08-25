
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3, ballObject4,ballObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	ballDiameter=40;

	startballPositionX=width/2;
	startballPositionY=height/4+500;
	ballObject1=new ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ballObject2=new ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ballObject3=new ball(startballPositionX,startballPositionY,ballDiameter);
	ballObject4=new ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ballObject5=new ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(ballObject1.body,roofObject.body,-ballDiameter*2, 0)

	rope2=new rope(ballObject2.body,roofObject.body,-ballDiameter*1, 0)
	rope3=new rope(ballObject3.body,roofObject.body,0, 0)
	rope4=new rope(ballObject4.body,roofObject.body,ballDiameter*1, 0)
	rope5=new rope(ballObject5.body,roofObject.body,ballDiameter*2, 0)

	/*constraint1={
		bodyA:ballObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-ballDiameter*2, y:0}
	}

	constraint2={
		bodyA:ballObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-ballDiameter, y:0}
	}


	constraint3={
		bodyA:ballObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:ballObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:ballDiameter, y:0}	

	}

	constraint5={
		bodyA:ballObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:ballDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX,roofBodyY);
}






