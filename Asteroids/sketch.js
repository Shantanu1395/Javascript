var s;
var rotate;
var asteroidnum=5;
var asteroids=[];
var lasers=[];

function setup() {
  createCanvas(800,800);
  s=new Ship();
  for (var i = 0; i <asteroidnum ; i++)
      asteroids.push(new Asteroid());
}

function draw() {
  background(0);
  initializeShip();
  initializeLaser();
  initializeAsteroids();

  for (var i = 0; i < lasers.length; i++) {
    for (var j = asteroids.length-1; j >=0; j--) {
        if(lasers[i].collides(asteroids[j])){
          var newone=asteroids[j].breakApart();

          if(newone[0].r!=1){
          asteroids=asteroids.concat(newone);
          }
          asteroids.splice(j,1);
          lasers.splice(i,1);
          break;
        }
    }
  }
}

function initializeLaser(){
  for (var i = lasers.length-1; i >=0; i--) {
    if(lasers[i].checkBoundary()==false){
      lasers.splice(i,1);
      break;
    }
    lasers[i].render();
    lasers[i].update();
  }
}

function initializeShip(){
  s.checkBoundary();
  s.render();
  s.turn();
  s.update();
  for (var i = 0; i < asteroids.length; i++) {
    s.checkCollision(asteroids[i]);
  }

}

function initializeAsteroids(){
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].moveAsteroids();
    asteroids[i].checkBoundary();
  }
}
