function Invader(x, y) {
    this.x = x;
    this.y = y;    
    this.r = 25;
    this.toDelete = false;

    this.xdir = 3;
    this.ydir = 0;

    this.show = function() {        
        fill(0, 255, 0);
        ellipse(this.x, this.y, this.r*2);        
    }

    this.move = function() {
        this.x += this.xdir;
        this.y += this.ydir;           
    }

    this.goodbye = function() {           
       this.toDelete = true;
    }

    this.shiftDown = function() {
        this.y = this.y + 20;
        this.xdir *= -1;
    }
}