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

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 25;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {  
        if(this.total === this.tail.length) {
            for(let i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }      
        
        this.tail[this.total-1] = createVector(this.x, this.y);
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        this.x = constrain(this.x, 0, width-25);
        this.y = constrain(this.y, 0, height-25);
    }
  
    this.show = function() {
        fill(255);
        for(let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y,25,25);
        }        
        rect(this.x, this.y, 25, 25);
    }
  
    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.collides = function(f) {     
	    if ((this.x + 25 > f.x && this.x < f.x + 25) && (this.y + 25 > f.y && this.y < f.y + 25)) {
            this.total++;
            return true;
        }
        else {
            return false;
        }
    }
    
    this.collidesTail = function() {     
        for(let i = 0; i < this.tail.length; i++) {            
            if ((this.x + 25 > this.tail[i].x && this.x < this.tail[i].x + 25) && (this.y + 25 > this.tail[i].y && this.y < this.tail[i].y + 25)) {                                
                this.total = 0;
                this.tail = [];
            }            
        }
    }
  }
  
  
function Food() {
    this.x = Math.floor(random(1, 20)) * 25;
    this.y = Math.floor(random(1, 20)) * 25;   
  
    this.show = function() {
      fill(255,0,0);
      rect(this.x, this.y, 25, 25);
    }

    this.update = function() {
        this.x = Math.floor(random(1, 20)) * 25;
        this.y = Math.floor(random(1, 20)) * 25;   
    }
  }

