class Canon {
  constructor(x,y,width,height) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.image=loadImage("assets/canon.png");

  };

  display(){
    var pos=this.body.position;
    image(this.image,pos.x,pos.y,45,45);
    //rectMode(CENTER);
  };
};
