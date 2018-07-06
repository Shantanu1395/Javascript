function Asteroid(pos,r,count){
  if(r){
    this.r=r*.5;
  }else {
    this.r=random(20,50);
  }

  if(count){
    this.count=count;
  }else {
    this.count=0;
  }

  if(pos){
      this.pos=pos.copy();
  }else{
  this.pos=createVector(random(width),random(height));
  }

  this.velocity=createVector(random(-3,3),random(-3,3));
  this.vertices=floor(random(5,15));
  this.offset=[];
  for (var i = 0; i < this.vertices; i++)
    this.offset[i]=random(this.r*random(1,100)/100,this.r*random(1,100)/100);

  this.breakApart=function(){
    var smallasteroids=[];
    var temp=0;
      if(this.count==1)
        this.r=1;

      if(this.count==0)
        temp=1;

      smallasteroids[0]=new Asteroid(this.pos,this.r,temp);
      smallasteroids[1]=new Asteroid(this.pos,this.r,temp);

      return smallasteroids;
  }

  this.render=function(){
    push();
    stroke(255);
    noFill();
    translate(this.pos.x,this.pos.y);

    beginShape();
    for (var i = 0; i <= this.vertices; i++) {
      var angle=map(i,0,this.vertices,0,TWO_PI);
      var x=(this.r+this.offset[i])*cos(angle);
      var y=(this.r+this.offset[i])*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    pop();
  }

  this.moveAsteroids=function(){
    this.pos.add(this.velocity);
  }

  this.checkBoundary=function(){
    if(this.pos.x>width)
      this.pos.x=0;
    else if(this.pos.x<0)
      this.pos.x=width;
    if(this.pos.y> height)
      this.pos.y=0;
    else if(this.pos.y<0)
      this.pos.y=height;
  }
}
