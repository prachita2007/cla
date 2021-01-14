
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
engine = Engine.create();
	world = engine.world;

  
function setup() {
	createCanvas(1200,400);

	Engine = engine.create();
  world = engine.world;
    ground = new Ground(600,height,1200,20)
    dustbinObj === display(1200,50)
    paperObject === display(200,450,40);
    groundObject === display(2,670,width,29);
 
    var render = render.create {
      element: .body,
      engine: englin,
      options:()
      width: 1200,
      height: 200,
       }

    Engine.run(englin);


}

  
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperObjest.body,paperObject.body.position,{x:85,y:-85});
 

}

}

