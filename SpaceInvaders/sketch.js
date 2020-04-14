let ship;
let bullets = [];
let bCount = 0;
let invaders = [];
let s;
let iBullets = [];

function setup() {
  createCanvas(600,600);
  ship = new Ship();
  
  let x = 125;
  let y = 50;
  for(let j = 0; j < 6; j++) {
    invaders[j] = new Invader(x, y);
    x += 75;
  } 
}

function draw() {    
  background(0);  
  ship.show();
  
  if(keyIsDown(LEFT_ARROW)) {
    ship.update(-5);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    ship.update(5);
  }

  for(let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
      for(let j = 0; j < invaders.length; j++) {
        if(bullets[i].hits(invaders[j])) {
          bullets[i].goodbye();    
          invaders[j].goodbye();              
        }
      }
  }

  let right = false;
  let left = false;
  for(let i = 0; i < invaders.length; i++) {    
    invaders[i].show();   
    invaders[i].move();
    if(invaders[i].x > width-invaders[i].r) right = true;
    if(invaders[i].x < 0+invaders[i].r) left = true;    
    if(invaders[i].y > 480) noLoop();
  }
  if(right) {
    for(let i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown();
    }
  }
  if(left) {
    for(let i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown();
    }
  }


  for(let i = bullets.length-1; i >= 0; i--) {
    if(bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }

  for(let i = invaders.length-1; i >= 0; i--) {
    if(invaders[i].toDelete) {
      invaders.splice(i, 1);
    }
  }

  s = Math.floor(random(1, 100));
  if(s === 15) {
    let rand = Math.floor(random(0, invaders.length-1));
    iBullets.push(new iBullet(invaders[rand].x, invaders[rand].y));    
  }

  for(let i = 0; i < iBullets.length; i++) {
    iBullets[i].show();
    iBullets[i].move();
    if(iBullets[i].y > height) iBullets[i].goodbye();
  }

  for(let i = iBullets.length-1; i >= 0; i--) {
    if(iBullets[i].toDelete) {
      iBullets.splice(i, 1);
    }
  }
  
  for(let i = 0; i < iBullets.length; i++) {
    if(iBullets[i].hits(ship)) {
      noLoop();
    }
  }
}

  

function keyPressed() {
  if(keyCode === UP_ARROW) {
      bullets.push(new Bullet(ship.x, ship.y));       
  }
}
