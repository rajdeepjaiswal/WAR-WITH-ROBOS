class   Bullet{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visibility = 225;
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.World.add(world, this.body);
        this.image = loadImage ("bullet.jpg");
      }
      display(){
        console.log(this.body);
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        pos.y = pos.y-1;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      
    }
}