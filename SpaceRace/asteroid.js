function Asteroid() {
    this.x = 0;
    this.y = Math.floor(random(20,560));
    this.size = Math.floor(random(10,30));   
    this.xspeed = Math.floor(random(1,5));

    this.show = function() {
        fill(255);
        circle(this.x, this.y, this.size);
    }

    this.move = function() {        
        this.x = this.x + this.xspeed;    
        if(this.x > width) {    
            this.x = 0;
            this.y = Math.floor(random(20,450));
            this.xspeed = Math.floor(random(1,5));
        }
    }
}