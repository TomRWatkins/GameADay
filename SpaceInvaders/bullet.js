function Bullet(x, y) {
    this.x = x;
    this.y = y;    
    this.r = 5;
    this.toDelete = false;

    this.show = function() {        
        fill(0, 55,255);
        ellipse(this.x, this.y, this.r*2);        
    }

    this.move = function() {        
        this.y -= 5;        
    }

    this.goodbye = function() {
        this.toDelete = true;
    }

    this.hits = function(invader) {
        let d = dist(this.x, this.y, invader.x, invader.y);
        if(d < this.r + invader.r) {
            return true;
        }
        else {
            return false;
         }
    }
}