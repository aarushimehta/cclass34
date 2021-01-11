class Ball{
  constructor(x,y,r){
    var options ={
      restitution: 0.8,
      density: 1.0,
      friction: 0.1

    }
    this.body = Bodies.circle(x,y,r,options);
    this.x=x;
    this.y=y;
    this.r=r;
    World.add(world,this.body);
  }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill("yellow");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r);
      pop();


    }

}