const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(400,400);

  // creates myEngine and myEngine.world gets created automatically
  myEngine = Engine.create(); 

  //namespacing myEngine.world as a simple variable as myWorld
  myWorld = myEngine.world;

  //to create a new Box object
  box1 = new Box(140,100,50,50);

  //to create box2
  box2 = new Box(100,300,50,100);

  //to create ground object
  ground = new Ground(200,390,400,10);

}

function draw() {
  background(0);  
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();

 
}