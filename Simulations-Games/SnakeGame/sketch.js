var p;
var hit;
var scl=10;
var f;
var eaten=false;
var l=scl,b=scl;

function setup() { 
  createCanvas(600, 600);
  hit=false;
  p=new pointer();
  f=new food();
  
} 

function draw() { 
  background(0);
  hit=false;
  f.showFood();
  p.update();
  p.hitWall();
  p.show();
  
  
  
  if(dist(f.x+Math.sqrt(scl),f.y+Math.sqrt(scl),p.x+Math.sqrt(scl),p.y+Math.sqrt(scl))<=scl){
  eaten=true;
    console.log("eaten");
  }
  
  if(eaten==true){
  f=new food();
  p.updateLength();  
  eaten=false;
    p.update();
  p.hitWall();
  p.show();
  }
  
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW) 
    p.dir(1,0);
  else if (keyCode === LEFT_ARROW)
    p.dir(-1,0);
  else if (keyCode === UP_ARROW) 
    p.dir(0,-1);
  else if (keyCode === DOWN_ARROW) 
    p.dir(0,1); 
}

function pointer(){

  this.x=width/2;
  this.y=height/2;
  this.xSpeed=1;
  this.ySpeed=0;
  
  this.show=function(){
    if(hit==true)
      fill(255,0,0);
    else
  		fill(255);
  rect(this.x,this.y,scl,scl); 
  this.update();  
  };
  
  this.update=function(){
  this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    this.x=constrain(this.x,0,width-scl);
    this.y=constrain(this.y,0,height-scl);
  };
  
  this.dir=function(x,y){
    this.xSpeed=x;
    this.ySpeed=y;
  };
  
  this.hitWall=function(){
  if(this.x==0 || this.y==0 || this.x==width-scl || this.y==height-scl)
    hit=true;
  };
  
  this.updateLength=function(){
    if(this.xSpeed==1 && this.ySpeed==0)
      this.x=this.x-scl;
    else if(this.xSpeed==-1 && this.ySpeed==0)
      this.x=this.x+scl;
  };
  
}

function food(){
	this.x=random(width);
  this.y=random(height);
  
  this.showFood=function(){
    fill(0,255,0);
  rect(this.x,this.y,scl,scl);
  };
  
}