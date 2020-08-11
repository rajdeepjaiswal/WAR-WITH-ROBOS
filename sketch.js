var engine,world;

function setup(){
  createCanvas(400,400);
  engine = Matter.Engine.create()
  world = engine.world
  ground1 = new Ground()
  player1 = new Player(200,370,50,50)
}
function draw(){
  background("white");
  ground1.display()
  player1.display()
}
function keyPressed(){
  if(keyCode==32){
    bullet = new Bullet(200,370,50,50);
    bullet.display()
  }
}