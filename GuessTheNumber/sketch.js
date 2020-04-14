let computerNum;
let myNum;
let input;

function setup() {
  noCanvas();  
  createP('Im thinking of a number 1-500! Enter your guess in the box and hit enter');  
  input = createInput();
  input.position(40,39)
  computerNum = Math.floor(random(1,500));  
  createP('.');
  createP('.');
}

function doSomething() {  
  myNum = parseInt(input.value());  
  if(myNum < computerNum) createP(input.value() + '  Too low!');
  if(myNum > computerNum) createP(input.value() + '  Too high!');
  if(myNum === computerNum) createP(input.value() + '  CORRECT!');
  
}
function keyPressed() {
  if(keyCode === 13) {
    doSomething();
  }
}