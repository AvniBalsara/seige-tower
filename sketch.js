const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var gb1,gb2,gb3,gb4,gb5,gb6,gb7,gb8,gb9,gb10,gb11,gb12,gb13,gb14;
var bb1,bb2,bb3,bb4,bb5;
var rb1,rb2,rb3,rb4;
var yb1;
var poly,slingShot;

function preload(){

}

function setup(){
  var canvas = createCanvas(1000,800);
   engine = Engine.create();
   world = engine.world;

  ground1 = new Ground(600,height,1200,40);
  ground2 = new Ground(800,300,260,10);


  gb1 = new Green(800,290);
  gb2 = new Green(830,290);
  gb3 = new Green(860,290);
  gb4 = new Green(890,290);
  gb5 = new Green(770,290);
  gb6 = new Green(740,290);
  gb7 = new Green(710,290);

  bb1 = new Blue(800,260);
  bb2 = new Blue(830,260);
  bb3 = new Blue(860,260);
  bb4 = new Blue(770,260);
  bb5 = new Blue(740,260);

  rb1 = new Red(800,220);
  rb2 = new Red(830,220);
  rb3 = new Red(770,220);

  rb4 = new Red(500,590);

  yb3 = new Yellow(800,200);
  yb4 = new Yellow(500,560)

  poly = Bodies.circle (50,200,20);
  poly.density=2;
  poly.friction=0.5;
  World.add(world,poly);
  //fill("blue");

  
 slingShot=new Slingshot(this.poly,{x:200,y:200});
}

function draw(){
Engine.update(engine);
background(0);
   ground1.display();
   ground2.display();
   

   gb1.display();
   gb2.display();
   gb3.display();
   gb4.display();
   gb5.display();
   gb6.display();
   gb7.display();

   bb1.display();
   bb2.display();
   bb3.display();
   bb4.display();
   bb5.display();

   rb1.display();
   rb2.display();
   rb3.display();

   

   yb3.display();
   
  
   strokeWeight(0);
   stroke('white');
   fill('white');
   text('drag mouse to shoot ball',500,100,200,100);

   strokeWeight(3);
   stroke('yellow');
   fill('yellow');

   ellipse(poly.position.x,poly.position.y,40);
   stroke("silver");

   slingShot.display();

   
   drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 slingShot.fly();

}

