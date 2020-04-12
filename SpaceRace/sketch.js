let shipOne;
let shipTwo;
let asteroids = [];
let oneScore = 0;
let twoScore = 0;

function setup() {
  createCanvas(500,600);
  shipOne = new Ship(166, 580);
  shipTwo = new Ship(332, 580);  
  for(let i = 0; i < 40; i++) 
    asteroids[i] = new Asteroid();
}

function draw() {  
  background(51);  
  shipOne.show();
  shipTwo.show();
  checkMove();
  checkWinner();
  shipOne.isFinished();
  shipTwo.isFinished();
  for(let i = 0; i < 30; i++) {
    asteroids[i].show();
    asteroids[i].move();
  }

  for(let i = 0; i < 30; i++) {
    shipOne.collides(asteroids[i]);
    shipTwo.collides(asteroids[i]);
  }
}

function checkWinner() {
  if(shipOne.finished && !shipTwo.finished)  {    
    shipOne.y = 580;
    shipTwo.y = 580;
    shipOne.finished = false;
    shipTwo.finished = false;
    oneScore++;
    console.log('PlayerOne' + '  ' + 'PlayerTwo');
    console.log('    ' + oneScore + '          ' + twoScore);
  }
  else if (!shipOne.finished && shipTwo.finished) {    
    shipOne.y = 580;
    shipTwo.y = 580;
    shipOne.finished = false;
    shipTwo.finished = false;
    twoScore++;
    console.log('PlayerOne' + '  ' + 'PlayerTwo');
    console.log('    ' + oneScore + '          ' + twoScore);
  }
  else if((shipOne.finished && shipTwo.finished)) {    
    shipOne.y = 580;
    shipTwo.y = 580;
    shipOne.finished = false;
    shipTwo.finished = false;
  }
}

function checkMove() {
  if(keyIsDown(UP_ARROW)) {    
    shipOne.move(-5);
  }
  else if(keyIsDown(DOWN_ARROW)) {    
    shipOne.move(5);
  }
  if(keyIsDown(87)) {    
    shipTwo.move(-5);
  }
  else if(keyIsDown(83)) {    
    shipTwo.move(5);
  }
}

