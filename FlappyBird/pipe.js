function Pipe(s) {
    this.x = s;
    this.y = 0;    
    this.h = Math.floor(random(10,450));
    this.l = 30;
    this.gap = 150;

    this.show = function() {
        fill(0,200,0);
        rect(this.x, this.y, this.l, this.h);             
        rect(this.x, this.h+this.gap, this.l, height-this.h+this.gap);     
    }

    this.update = function() {
        this.x -= 1.5;
        if(this.x < 0) {
            this.x = width;
            this.h = Math.floor(random(10,450));
        }
    }

    this.passes = function(c) {
        return c.x === this.x + this.l/2 && !(this.colliding(c))
    }

    this.colliding = function(c) {       
        //TOP PIPE
        let testX = c.x;
        let testY = c.y;
      
        // which edge is closest?
        if (c.x < this.x)         testX = this.x;      // test left edge
        else if (c.x > this.x+this.l) testX = this.x+this.l;   // right edge
        if (c.y < this.y)         testY = this.y;      // top edge
        else if (c.y > this.y+this.h) testY = this.y+this.h;   // bottom edge
      
        // get distance from closest edges
        let distX = c.x-testX;
        let distY = c.y-testY;
        let distance = sqrt( (distX*distX) + (distY*distY) );
      
        // if the distance is less than the radius, collision!
        if (distance <= c.size) {
          return true;
        }

        //BOTTOM PIPE
        testX = c.x;
        testY = c.y;
      
        // which edge is closest?
        if (c.x < this.x)         testX = this.x;      // test left edge
        else if (c.x > this.x+this.l) testX = this.x+this.l;   // right edge
        if (c.y < this.h+this.gap)         testY = this.h+this.gap;      // top edge
        else if (c.y > this.y+height-(this.h+this.gap)) testY = this.h+this.gap+(height - (this.h+this.gap));   // bottom edge
      
        // get distance from closest edges
        distX = c.x-testX;
         distY = c.y-testY;
         distance = sqrt( (distX*distX) + (distY*distY) );
      
        // if the distance is less than the radius, collision!
        if (distance <= c.size) {
          return true;
        }
        return false;        
    }

}