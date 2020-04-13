let x;
let y;
let index;
let positions = [];
let turn = 0;
let count  = 0;
let shapesToDraw = [];
let winner = false;

function setup() {
  createCanvas(600,600);
  for(let i = 0; i < 9; i++) {
    positions[i] = 'E';
  }  
}

function draw() {  
  rectMode(CENTER);
  background(0);  
  drawShapes();  
  for(let i = 0; i < count; i++) {
    shapesToDraw[i].show();
  }
  checkWinner();
}

function checkWinner() {  
  strokeWeight(2);
  if(positions[0] === positions[1] && positions[1] === positions[2] && positions[0] != 'E') {   
    winner = true; 
    line(0, 100, 600, 100);
  } 
  if(positions[3] === positions[4] && positions[4] === positions[5] && positions[3] != 'E') {   
    line(0, 300, 600, 300);
    winner = true;
  } 
  if(positions[6] === positions[7] && positions[7] === positions[8] && positions[6] != 'E') {
    line(0, 500, 600, 500);
    winner = true;
  }
  if(positions[0] === positions[3] && positions[3] === positions[6] && positions[0] != 'E') {
    line(100, 0, 100, 600);
    winner = true;
  }
  if(positions[1] === positions[4] && positions[4] === positions[7] && positions[1] != 'E') {
    line(300, 0, 300, 600);
    winner = true;
  }
  if(positions[2] === positions[5] && positions[5] === positions[8] && positions[2] != 'E') {
    line(500, 0, 500, 600);
    winner = true;
  }
  if(positions[0] === positions[4] && positions[4] === positions[8] && positions[0] != 'E') {
    line(0, 0, 600, 600);
    winner = true;
  }
  if(positions[6] === positions[4] && positions[4] === positions[2] && positions[6] != 'E') {
    line(600, 0, 0, 600);
    winner = true;
  }  
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;  
  if(x < 200 && y < 200) index = 0;
  else if(x < 400 && y < 200) index = 1;
  else if(x < 600 && y < 200) index = 2;
  else if(x < 200 && y < 400) index = 3;
  else if(x < 400 && y < 400) index = 4;
  else if(x < 600 && y < 400) index = 5;
  else if(x < 200 && y < 600) index = 6;
  else if(x < 400 && y < 600) index = 7;
  else if(x < 600 && y < 600) index = 8;  

  switch(index) {
    case 0: x = 100; y = 100; break;
    case 1: x = 300; y = 100; break;
    case 2: x = 500; y = 100; break;
    case 3: x = 100; y = 300; break;
    case 4: x = 300; y = 300; break;
    case 5: x = 500; y = 300; break;
    case 6: x = 100; y = 500; break;
    case 7: x = 300; y = 500; break;
    case 8: x = 500; y = 500; break;
  }

  if(positions[index] === 'E' && winner === false) {
    if(turn % 2 == 0) {    
      shapesToDraw[count] = new Naught(x,y);
      positions[index] = 'O';
    }
    else {
      shapesToDraw[count] = new Cross(x,y);
      positions[index] = 'x';    
    }
    count++;
    turn++;
  }
}

function drawShapes() {
  fill(255,255,255);
  let x = 100;
  let y = 100;
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++){
      rect(x, y, 190, 190);
      x += 200;
    }
    x = 100;
    y += 200;
  }
}

function keyPressed() {
  if(keyCode === 32) {
    resetBoard();
  }
}

function resetBoard() {
  shapesToDraw = [];
  count = 0;
  turn = 0;
  for(let i = 0; i < 9; i++) {    
    positions[i] = 'E';
  }
}