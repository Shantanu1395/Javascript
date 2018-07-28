function Ship(){

  this.pos=createVector(width/2,height/2);
  this.velocity=createVector();
  this.r=20;
  this.heading=-PI/2;
  this.rotation=0;
  this.isBoosting=false;

  this.checkBoundary=function(){
    if(this.pos.x>width)
      this.pos.x=0;
    else if(this.pos.x<0)
      this.pos.x=width;
    if(this.pos.y>height)
      this.pos.y=0;
    else if(this.pos.y<0)
      this.pos.y=height;
  }


  this.render=function(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.heading+PI/2);
    noFill();
    stroke(255);
    smooth();
    triangle(-this.r,this.r,this.r,this.r,0,-this.r);
    pop();
  }

  this.boosting=function(b){
    this.isBoosting=b;
  }

  this.setRotation=function(angle){
    this.rotation=angle;
  }

  this.turn=function(){
    this.heading+=this.rotation;
  }

  this.addBoost=function(){
    var force=p5.Vector.fromAngle(this.heading);
    this.velocity.add(force);
  }

  this.update=function(){
      if(this.isBoosting==true)
          this.addBoost();

      this.pos.add(this.velocity);
      this.velocity.mult(.90);
  }

  this.checkCollision=function(a){

        if(dist(this.pos.x,this.pos.y,a.pos.x,a.pos.y)<a.r+this.r)
        this.r=0;

  }

}
