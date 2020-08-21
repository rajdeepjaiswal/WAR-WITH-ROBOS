class Enemy{
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
        this.image = loadImage ("robos.png");
      }
      score() {
          if(this.visibility <0 & this.visibility > -100)
          {
              score = score+1
        }
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(!this.detectCollison(this.body))
        {
       
        pos.y = pos.y+1;
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        image(this.image,0,0,this.width, this.height);
        pop();
        }
        else
        {
            if(this.body.position!=null )
            {
                console.log(this.body);
            Matter.World.remove(world,this.body);
            this.visibility =this.visibility-5;
            push();
            tint(255,this.visibility);
            translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        image(this.image,0,0,this.width, this.height);
        pop();
        score = score+1;
            }
        }
      
    }
    detectCollison(Enemy)
    {
        for(var i=0;i<bulletArray.length;i++)
        {
           
                var distance=dist(bulletArray[i].body.position.x,bulletArray[i].body.position.y,Enemy.position.x,Enemy.position.y)
                if(distance<50)
               
                {
                    EnemyArray.pop();
                    return true;
                }
            
        }
    }
}

