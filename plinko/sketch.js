const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particle1;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,ground;

function setup() {
   createCanvas(480,800);
   engine=Engine.create();
  world=engine.world;
   particle1=new Particle(245,100,20)
   plinko1=new Plinko(50,150,20);
   plinko2=new Plinko(150,150,20);
   plinko3=new Plinko(250,150,20);
   plinko4=new Plinko(350,150,20);
   plinko5=new Plinko(450,150,20);
   plinko6=new Plinko(100,250,20);
   plinko7=new Plinko(200,250,20);
   plinko8=new Plinko(300,250,20);
   plinko9=new Plinko(400,250,20);
   plinko10=new Plinko(50,350,20);
   plinko11=new Plinko(150,350,20);
   plinko12=new Plinko(250,350,20);
   plinko13=new Plinko(350,350,20);
   plinko14=new Plinko(100,450,20);
   plinko15=new Plinko(200,450,20);
   plinko16=new Plinko(300,450,20);
   plinko17=new Plinko(400,450,20);
   plinko18=new Plinko(450,350,20);
   wall1=new Wall(0,500,10,200);
   wall2=new Wall(80,500,10,200);
   wall3=new Wall(160,500,10,200);
   wall4=new Wall(240,500,10,200);
   wall5=new Wall(320,500,10,200);
   wall6=new Wall(400,500,10,200);
   wall7=new Wall(475,500,10,200);
   ground=new Wall(0,690,800,10);
}

function draw() {
Engine.update(engine)
  background('black');  
  particle1.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  ground.display();
}