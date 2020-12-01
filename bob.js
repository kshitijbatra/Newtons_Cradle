class Bob{
    constructor(x,y,r){
   var options={
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:0.5
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Matter.Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
    }
    display(){
        var paperPos=this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}