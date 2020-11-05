  class Ground{
   //properties
  constructor(x,y,width,height){
    var options = {
    isStatic: true

}
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(myWorld,this.body);

}

  //functions
  display(){
  var pos = this.body.position;
  fill(255);
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width,this.height);

  }

}