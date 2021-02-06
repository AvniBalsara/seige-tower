class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.5,
            'friction':0.2,
            'density':0.002
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position
        rect(pos.x,pos.y,this.width,this.height);
        rectMode(CENTER);
        fill("green");
      }
}