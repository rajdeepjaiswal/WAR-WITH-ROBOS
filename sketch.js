var engine,world;
var score = 0;
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
  text ("Score"+score,200,50)
  ground1.display()
  player1.display()
  
  if(frameCount%50 == 0){
  EnemyArray.push(new Enemy(random(10,300),10,50,50))
}
for(var j = 0; j< EnemyArray.length; j ++) {
  if(EnemyArray[j] != undefined) {
  EnemyArray[j].display()
}}
for(var i = 0; i<bulletArray.length; i ++) {
  bulletArray [i].display()
}
}
function keyPressed(){
  if(keyCode==32){
    bulletArray.push(new Bullet(player1.body.position.x,player1.body.position.y,50,50));
  }
}