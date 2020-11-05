var helicopterIMG, helicopterSprite, packageSprite,packageIMG,right,left,base;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//base=createSprite(370,620,200,20)
	//left=createSprite(300,600,20,50)
	//right=createSprite(450,600,20,50)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	base = Bodies.rectangle( 370,620,200,20,{isStatic:true} );
	World.add(world, base);
	left = Bodies.rectangle(300,600,20,50,{isStatic:true});
	World.add(world, left);
	right = Bodies.rectangle( 450,600,20,50,{isStatic:true});
	World.add(world, right);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  fill(255,0,0)
  rect(base.position.x,base.position.y,200,20)
  fill(255,0,0)
  rect(left.position.x,left.position.y,20,50)
  fill(255,0,0)
  rect(right.position.x,right.position.y,20,50)
  

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
    
  }
}



