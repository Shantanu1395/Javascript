function Cell(pos,r,c){
  
  if(pos){
  this.pos=pos.copy();
  }else{
    this.pos=createVector(random(width),random(height));
  }
  
	this.r=r || 60;
 	this.c=c || color(random(100,255),0,random(100,255),100);
  
  this.show=function(){
  	ellipse(this.pos.x,this.pos.y,this.r,this.r);
  };
  
  this.mitosis=function(){
  	var cellA=new Cell(this.pos,this.r*.7,this.c);
    return cellA;
  };
  
  this.move=function(){
    fill(this.c);
    noStroke();
  	var vel=p5.Vector.random2D();
    this.pos.add(vel);
  };
  
  this.clicked=function(x,y){
  	var d=dist(x,y,this.pos.x,this.pos.y);
    if(d<this.r)
      return true;
    return false;
  };
  
}