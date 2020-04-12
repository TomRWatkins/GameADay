let s;
let f;
function setup() {
  createCanvas(500,500);
  s = new Snake();  
  f = new Food();
}

function draw() {
  frameRate(10);
  background(51);  
  f.show();
  s.update();
  s.show();   

  if(s.collides(f)) {
    f.update();
  }
  s.collidesTail();
  
}
function keyPressed() {
  if(keyCode === UP_ARROW){    
    s.dir(0, -25);
  }
  else if(keyCode === DOWN_ARROW){    
    s.dir(0, 25);
  }
  else if(keyCode === LEFT_ARROW){    
    s.dir(-25, 0);
  }
  else if(keyCode === RIGHT_ARROW){    
    s.dir(25, 0);
  }
}



