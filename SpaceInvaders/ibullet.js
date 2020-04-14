function iBullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.toDelete = false;

    this.show = function() {        
        fill(255, 55, 55);
        ellipse(this.x, this.y, this.r*2);        
    }

    this.move = function() {        
        this.y += 2;        
    }

    this.goodbye = function() {
        this.toDelete = true;
    }

    this.hits = function(ship) {
        let d = dist(this.x, this.y, ship.x, ship.y);
        if(d < this.r + ship.r) {
            return true;
        }
        else {
            return false;
         }
    }
}