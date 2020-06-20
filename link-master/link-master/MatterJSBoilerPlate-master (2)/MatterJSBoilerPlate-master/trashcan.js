class Box {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.8,
          friction:100,
          density:1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      imageMode(CENTER);
      fill("purple");
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      image(this.image,0,0, this.width, this.height);
      pop();
      
    }
  };