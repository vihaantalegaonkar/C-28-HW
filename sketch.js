const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbin, paper, ground;	
var world, chain;

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;
	dustbin=new boxDustbin(1200,680);
	paper=new boxpaper(200,450,40);
	ground=new boxground(width/2,690,width,20);
	chain = new launcher(paper.body,{x:200, y:450});

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
}

function draw() {
  background(255);
 
  dustbin.display();
  paper.display();
  ground.display();
  chain.display();
}

/*function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x:1000,
		y:600
		});
	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}