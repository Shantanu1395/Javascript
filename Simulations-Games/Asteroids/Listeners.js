function keyPressed(){
  if(keyCode == CONTROL){
    lasers.push(new Laser(s));
  }
  else if(keyCode == RIGHT_ARROW)
    s.setRotation(0.1);
  else if(keyCode == LEFT_ARROW)
    s.setRotation(-0.1);
  else if(keyCode == UP_ARROW)
    s.boosting(true);
  else if(keyCode == DOWN_ARROW)
    s.boosting(false);

}

function keyReleased(){
  s.setRotation(0);
}
