function Cactus(xspeed) {
    this.x = width;
    this.y = height-30;
    this.toDelete = false;
    this.xspeed = xspeed;
    this.l = 30;
    this.w = 30;

    this.show = function() {
        fill(0, 255, 0);
        rect(this.x, this.y, this.l, this.w);
    }
    
    this.move = function() {
        this.x -= this.xspeed;
    }

    this.hits = function(ball) {
        if(ball.x < this.x + this.w && this.x < ball.x + ball.w && 
            ball.y+ball.l > this.y && this.y + this.l > ball.y) {
            return true;
        }
        return false;
    }    
}