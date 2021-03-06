const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var black1 , stand, polygon, backgroundImg;
var ground, polygon_img, slingshot, blackBg;

var score= 0;
function preload() {
  polygonImg=loadImage("polygon.png");
}

function setup(){
createCanvas(1200,400);

engine = Engine.create();
world = engine.world; 
  
block1=new Block(300,235,30,40);
block2=new Block(330,235,30,40);
block3=new Block(390,235,30,40);
block4=new Block(420,235,30,40);
block5=new Block(450,235,30,40);
block6=new Block(360,195,30,40);
block7=new Block(390,195,30,40);
block8=new Block(420,195,30,40);
block9=new Block(390,155,30,40);
block10=new Block(930,235,30,40);
block11=new Block(960,235,30,40);
block12=new Block(990,235,30,40);
block13=new Block(1020,235,30,40);
block14=new Block(1050,235,30,40);
block15=new Block(960,195,30,40);
block16=new Block(990,195,30,40);
block17=new Block(1020,195,30,40);
block18=new Block(990,155,30,40);

this.polygon = Bodies.circle(50,200,20);
World.add(world, this.polygon);

slingshot = new Slinglaunch(this.polygon,{x:100, y:200});

stand = new Ground(1000, 380, 100000, 20);
stand1 = new Ground(1000, 250, 200, 15);
stand2 = new Ground(400, 350, 200, 15);

}
function draw(){
background(0);
Engine.update(engine);
textSize("20");
fill("Orange");
text("Drag the hexangonal stone and release it")
text("Press space for a second chance", 1000, 350);
text("Score: "+ score, 750, 40);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();

stand.display();
stand1.display();
stand2.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();

ImageMode(CENTRE);
image(polygon_img, this.polygon.position.x, this.polygon.position.y, 40, 40);

slingshot.display();

}

function keyPressed(){
  if(keyCode==32){
    slingshot.attach(this.polygon);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
