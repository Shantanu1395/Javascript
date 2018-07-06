var broadcast="Network Secure";
var flag=false,mflag=false,cflag=false;
var r1=[],r2=[];
var range=200;
var nodeid=0,did=0;
var time=0.01;
var balls=[],malicious=[],maliciousneighbours=[];
var total=prompt("Enter nodes");
var count=0;
var s1,s2;
var selected=0;
var lamda,s,G,D,m,t,t1,t2,f,bg,alertsound,normalsound;
var adj;
var xcord=0,ycord=0;

function preload(){
  //alertsound=loadSound('alertsiren.mp3');
  //normalsound=loadSound('normal.mp3');
}

function setup() { 
//normalsound.loop();
  lamda=(total-1);
  s=2;
  G=computePublicMatrix();
  //printPublicMatrix(G);
  D=computePrivateMatrix();
  //console.log("Priate");
  //display(D);
  m=multiply(D,G);
  t=transposeMatrix(m);
  t=modulus(t);
  //console.log("-----");
  //display(t);
  t=transposeMatrix(t);
  f=multiply(t,G);
  f=modulus(f);
  display(f);
  createCanvas(1000,600);
  background(0);
  insertNodes();  
} 

function draw() { 
  

  if(mflag){
    //normalsound.stop();
    //alertsound.play();
  }
  //else
    //alertsound.stop();
  //normalsound.play();
  
  background(0);
  neighbor();
  var tt="Adjecency Matrix\n    ";
  for (var r = 0; r < adj.length; r++) 
    tt+=(r+1)+'  ';
  tt+="\n";
  for (var r = 0; r < adj.length; r++) {
    tt+=(r+1)+" ";
    tt+="  "+adj[r].join('  ')+"  \n";
  }
  text(tt,10,40);

  text(broadcast,width/2-20,10);
  if(malicious.length==0)
    mflag=false;

  if(mflag==true)
    background(200,0,0,100);
  else
    background(0,0,200,0);
  
  for(var i=0;i<balls.length;i++){
    balls[i].move();
    balls[i].display();
  }
  
  if(flag===true){ 
    for(var i=0;i<malicious.length;i++){
      malicious[i].move();
    malicious[i].display();
  }
  }
  
  if(selected==1){
    computeInRange(s1);
  }
  if(mflag==true)
    background(200,0,0,100);
  
  if(selected==2){
    if(dist(s1.x,s1.y,s2.x,s2.y)>=range){
        stroke(255,0,0);
        text("Cant establish private key",(s1.x+s2.x)/2,(s1.y+s2.y)/2);     
        line(s1.x,s1.y,s2.x,s2.y);
    }
    else{
        stroke(100,205,0);
        text("Private Key:"+f[s1.id-1][s2.id-1],(s1.x+s2.x)/2,(s1.y+s2.y)/2);
        line(s1.x,s1.y,s2.x,s2.y);
    }
    computeInRange(s1);
    computeInRange(s2);

    if(mflag==true)
    background(200,0,0,100);
    else
    background(0,0,200,0);
    }
    

    if(malicious.length>0 && mflag==true){
      //var abc=[];
      for(var i=0;i<malicious.length;i++){
      computeInRange(malicious[i]);
        }
        if(mflag==true)
    background(200,0,0,100);
         else
    background(0,0,200,0);
    stroke(0);
  }

}

function neighbor(){
  adj=new Array(balls.length);
  for(var i=0;i<balls.length;i++){
    adj[i]=new Array(balls.length);
      for(var j=0;j<balls.length;j++){
          if(i==j)
            adj[i][j]=0;
          else{
            if(dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y)<=range)
              adj[i][j]=1;
            else
              adj[i][j]=0;
          }
      }
  }
  return adj;
}

function keyTyped() {

  if (key === 'e') {
    selected=0;
    s1=0;
    s2=0;
  }

  if (key === 's') {
    spawnMaliciousNodes(3);
    flag=true;
  }

  if (key === 'l') {
    mflag=true;
  }

  if (key === 'd') {

   if(bflag==true){
      for (var i = 0; i <malicious.length; i++) {
      if(malicious[i].id==did){
        malicious.splice(malicious.indexOf(malicious[i]), 1);
      }
    }

    if(malicious.length==0)
      bflag=false;

    broadcast=bflag==true?"Mallicious Node detected with senderid :"+senderid:"Network Secure";

   }
  }  

}

function mousePressed(){
  
  for(var i=0;i<balls.length;i++){
    var d=dist(balls[i].x,balls[i].y,mouseX,mouseY);
    if(d<=balls[i].r*2){
      if(selected==0){
        s1=balls[i];
        balls[i].a=255;
        balls[i].b=0;
        r1=computeInRange(s1);
        ellipse(balls[i].x,balls[i].y,balls[i].r*2,balls[i].r*2);
        selected++;
        break;
      }
      else if(selected==1){
        s2=balls[i];
        balls[i].a=255;
        balls[i].b=0;
        r2=computeInRange(s2);
        ellipse(balls[i].x,balls[i].y,balls[i].r*2,balls[i].r*2);
        selected++;
        break;
      }
    }//end if
    
  }//end for
}

function Ball(x,y,type){
  this.id=++nodeid;
  this.x=x;
  this.type=type;
  this.y=y;
  this.xoff=random(50),this.yoff=random(50,100);
  this.inbox=[];
  this.outbox=[];
  this.w=255;
  this.r=16;
  this.x=constrain(x,this.r,width-this.r);
  this.y=constrain(y,this.r,height-this.r);
  this.battery=this.r*2;
  this.a=100;
  this.b=255;

  this.send=function(txt,receiverid){
  this.outbox.push([receiverid,txt]);
  }

  this.receive=function(txt,senderid){
  //console.log(senderid);
  //var s=senderid+""; 
  //console.log(s); 
  this.inbox.push([senderid,txt]);  
  this.inbox.splice(100,this.inbox.length-1);
  //console.log(this.inbox[0][1]);
  this.checkAuthenticity(senderid);
  }

  this.checkAuthenticity=function(senderid){
    //console.log(inbox[0].senderid);
  if(this.inbox.length>0){
    console.log(senderid);
    if(senderid>total){
      broadcast="Mallicious Node detected with senderid :"+senderid;
      bflag=true;
      did=senderid;
    }
    else
    {
      //communicate
    }
//console.log(this.broadcast);
  }
  }

  this.display=function(){
    smooth();
    fill(this.a,0,this.b);
    noStroke();

    ellipse(this.x,this.y,this.r*2,this.r*2);
    fill(this.w);


    if(this.type==0){
    if(mflag==true)
      this.battery-=time*2;
    else
    this.battery-=time*0.05;
    }
    else
        this.battery-=time;

    if(this.battery<0)
      this.battery=0;
 
    ellipse(this.x,this.y,this.battery,this.battery);
    
    fill(200, 2);
  rect(0, 0, width, height);
  // write the text in black and get its bounding box
  fill(100);
  var t="id:"+this.id+"\nx:"+Math.floor(this.x)+"\n"+"y:"+Math.floor(this.y)+"\n"+"battery:"+(Math.round(this.battery * 100) / 100);
        text(t,this.x-10,this.y+30);
          stroke(255);
    fill(120,-12);
    };
  
  this.move=function(){
    this.x=map(noise(this.xoff+=0.001),0,1,0,width);
    this.y=map(noise(this.yoff+=0.001),0,1,0,height);
    this.x=constrain(this.x,this.r,width-this.r);
  this.y=constrain(this.y,this.r,height-this.r);
  };
  
}

function establishLink(b1,b2){
  var txt = "crypto";
  //console.log(b1.id);
  //var txt = crypto.randomBytes(20).toString('hex');
  b1.send(txt,b2.id);
  b2.receive(txt,b1.id);
};

function displayNeighbours(balls){
  var x="";
  for (var i = balls.length - 1; i >= 0; i--) {
    x+=balls[i].id+" ";
    for (var j = balls.length - 1; j >= 0; j--) {
        if(i==j)
          continue;
        else{
          if(dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y)<=2*balls[i].r)
            x+=balls[j].id;
        }
        x+=" ";
    }
    x+="<br>";
  }
  return x;
}

function computeInRange(s){

  fill(255,80);
  ellipse(s.x,s.y,range*2,range*2);
    var r=[];
  for(var i=0;i<balls.length;i++){
      if(s==balls[i])
        continue;
      else{
          if(dist(balls[i].x,balls[i].y,s.x,s.y)<=range){
          r.push(balls[i]);
          //stroke(20,0,200 );
          if(mflag==true){
            //console.log(s);
            establishLink(s,balls[i]);
          }
          line(balls[i].x,balls[i].y,s.x,s.y);

      }
      }
  }
  fill(255,80);
  return r;
}

function insertNodes(){
    var xval=random(width);
    var yval=random(height);
  //  var b=new Ball(xval,yval);
  while(count<total){
    var overlapping=false;
    xval=random(width);
    yval=random(height);

      for(var j=0;j<balls.length;j++){
        {
            if((dist(xval,yval,balls[j].x,balls[j].y)<=balls[j].r+balls[j].r) || (xval<balls[j].r || yval<balls[j].r || xval>width-balls[j].r|| yval>height-balls[j].r)){
                overlapping=true;
              break;
            } 
        }  
      }
    
    if(!overlapping){
      b=new Ball(xval,yval,0);
      balls.push(b);
      count++;
    }
}
}



function spawnMaliciousNodes(n){
  var xval=random(width);
    var yval=random(height);
  //  var b=new Ball(xval,yval);
  var mcount=0;
  while(mcount<n){
    var overlapping=false;
    xval=random(width);
    yval=random(height);

      for(var j=0;j<malicious.length;j++){
        {
            if((dist(xval,yval,malicious[j].x,malicious[j].y)<=malicious[j].r+malicious[j].r) || (xval<malicious[j].r || yval<malicious[j].r || xval>width-malicious[j].r|| yval>height-malicious[j].r)){
                overlapping=true;
              break;
            } 
        }  
      }
    
    if(!overlapping){
      b=new Ball(xval,yval,1);
      b.a=100;
      b.b=100;
      b.w=0;
      malicious.push(b);
      mcount++;
    }
}
}


function computeLamda(total){
    var x=total;
    while(!isPrime(x))
      x--;
  return x;
  }

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function computePublicMatrix(){
var D= new Array(total);
for (var i = 0; i <= lamda; i++) {
  D[i] = new Array(lamda);
    for(var j=0;j<=lamda;j++){
          D[i][j]=Math.floor(random(10000));
    }
}
  return D;
}

function printPublicMatrix(G){
  console.log("2D public:\n");
for (var i = 0; i <= lamda; i++) {
  var str="";
    for(var j=0;j<total;j++){
      str+=(G[i][j]+" ");
    }
  console.log(str);
}
}

function computePrivateMatrix(){
  var D= new Array(lamda);
for (var i = 0; i <= lamda; i++) {
  D[i] = new Array(lamda);
    for(var j=0;j<=lamda;j++){
        if(i==j)
          D[i][j]=Math.floor(random(10000));
        else if(i<j){
          D[i][j]=Math.floor(random(5000));
        }
      else if(i>j)
          D[i][j]=D[j][i];
    }
}
  return D;
}

function modulus(x){
  for(var i=0;i<x.length;i++){
    for(var j=0;j<x[0].length;j++){
      x[i][j]=x[i][j]%101;
    }
  }
  return x;
}

function printPrivateMatrix(D){
  console.log("2D private:\n");
for (var i = 0; i <= lamda; i++) {
  var str="";
    for(var j=0;j<=lamda;j++){
      str+=(D[i][j]+"  ");
    }
  console.log(str+"\n");
}
}

function multiply(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}




function display(m) {
  for (var r = 0; r < m.length; r++) {
    console.log(" "+m[r].join(' ')+" \n");
  }
}

function transposeMatrix(arr) {
  var arrLen=arr.length;
  for (var i = 0; i < arrLen; i++) {
    for (var j = 0; j <i; j++) {
      //swap element[i,j] and element[j,i]
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}

