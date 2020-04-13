let b;
let pipes = [];
let score = 0;

function setup() {
  createCanvas(400, 600);  
  b = new Bird();
  pipes[0] = new Pipe(width);
  pipes[1] = p2 = new Pipe(200);  
}

function draw() {          
  background(51);  
  for(let i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].show();
  }
  b.update();
  b.show(0,0,255);  
  for(let i = 0; i < pipes.length; i++) {
    if(pipes[i].colliding(b)) {           
      b.show(255,0,0)
      score = 0;       
    }
  }
  for(let i = 0; i < pipes.length; i++) {
    if(pipes[i].passes(b)) {      
      score++;      
      console.log(score);
    }
  }


}

function keyPressed() {
  if(keyCode === UP_ARROW){
    b.up();
  }
}