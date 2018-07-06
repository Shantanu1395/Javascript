function Laser(s){
  this.location=createVector(s.pos.x,s.pos.y);
  this.velocity=createVector();

  this.render=function(){
    push();
    stroke(255);
    point(this.location.x,this.location.y);
    pop();
  }

  this.update=function(){
      this.velocity=p5.Vector.fromAngle(s.heading);
      this.velocity.mult(20);
      this.location.add(this.velocity);
  }

  this.collides=function(a){
          if(dist(a.pos.x,a.pos.y,this.location.x,this.location.y)<a.r)
            return true;
            return false;
   }

   this.checkBoundary=function(){
     if(this.location.x>width || this.location.x<0 || this.location.y> height || this.location.y<0)
      return false;
      return true;
   }

}
