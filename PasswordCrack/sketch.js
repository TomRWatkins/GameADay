let pin = [];
let hold = [];
let inputs = [];

function setup() {
  createCanvas(500, 500);
  for(let i = 0; i < 4; i++) {
    pin[i] = Math.floor(random(10));
  }
  let x = 75;
  for(let i = 0; i < 4; i++) {
    hold[i] = new Holders(x);
    x += 100;
  }

  for(let i = 0; i < 4; i++) {
    inputs[i] = createInput();    
  }
  
}

let allCorrect = false;

function draw() { 
  background(30);
  fill(255);
  textSize(20);
  text("Guess the 4 digit pin!",150,50);
  for(let i = 0; i < hold.length; i++) {
    hold[i].show();
  }

  for(let i = 0; i < hold.length; i++) {
    if(parseInt(inputs[i].value()) == pin[i]) {
      hold[i].correct = true;
    }
    else {
      hold[i].correct = false;
    }
  }
  


  if(allCorrect) {
    fill(0, 255, 0);
    textSize(30);
    text("Correct! the pin was  " + pin.toString(),20,150);
    noLoop();
  }
  allCorrect = true;
  for(let i = 0; i < hold.length; i++) {
    if(parseInt(inputs[i].value()) != pin[i]) {
      allCorrect = false;
    }
  }

  

}
