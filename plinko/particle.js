class Particle{
    constructor(x,y,radius){
        var options={
isStatic:false,

        }
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
    }
    display(){
      fill("red")
circle(this.body.position.x,this.body.position.y,this.radius)
    }
}