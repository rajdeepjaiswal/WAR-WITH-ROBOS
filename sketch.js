var engine,world;
var bulletArray = []
var EnemyArray = []

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
  if(World.frameCount %50 == 0){
  EnemyArray.push(new Enemy(random(10,100),200,50,50))
}
for(var j = 0; j< EnemyArray; j ++) {
  EnemyArray [j].display()
}
for(var i = 0; i<bulletArray.length; i ++) {
  bulletArray [i].display()
}
}
function keyPressed(){
  if(keyCode==32){
    bulletArray.push(new Bullet(player1.body.position.x,player1.body.position.y,50,50));
  }
}