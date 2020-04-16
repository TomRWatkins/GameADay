let dino;
let cactus = [];
let score = 0;
let pos = 1;
let cSpeed = score + pos * 2;
function setup() {
  createCanvas(800,600);
  dino = new Dino();   
}

function draw() {    
  background(25);  
  cSpeed = score + pos * 2;
  textSize(20);
  text(score.toString(), 10, 25, 90, 75);
  if(random(1) < 0.009) {
    cactus.push(new Cactus(cSpeed));    
  }

  for(let i = 0; i < cactus.length; i++) {
    cactus[i].show();
    cactus[i].move();
    
    if(cactus[i].x < 0) {
      score++;
      cactus[i].toDelete = true;
    }
  }

  dino.show();
  dino.move();

  for(let i = 0; i < cactus.length; i++) {
    if(cactus[i].toDelete) {
      cactus.splice(cactus[i], 1);
    }
  }

  for(let i = 0; i < cactus.length; i++) {
    if(cactus[i].hits(dino)) {
      fill(255,0,0);
      textSize(50);
      text('Game Over', height/2, width/2);
      textSize(30);
      text('Press space to start again', height/2-70, width/2+90);
      noLoop();
    }
  } 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    dino.jump();
  }
  if(keyCode === 32) {
    reset();
  }
}

function reset() {
  cactus = [];
  score = 0;
  clear();
  loop();
}