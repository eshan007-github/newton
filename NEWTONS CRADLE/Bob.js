class Bob {
  constructor(x, y, r) {
    var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':0.2,
        
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x, pos.y, this.r, this.r);
    pop();
  }
};
