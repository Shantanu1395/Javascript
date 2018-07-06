var cells=[];
var cell;

function setup() {
  createCanvas(400,400);
  cells.push(new Cell());
} 

function draw() {
 background(151);
  for(var i=0;i<cells.length;i++){
  	cells[i].show();
  	cells[i].move();
  }
}


function mousePressed(){
	for(var i=cells.length-1;i>=0;i--){
  	if(cells[i].clicked(mouseX,mouseY)){
    	cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
    	cells.splice(i,1);
    }
  }
}

