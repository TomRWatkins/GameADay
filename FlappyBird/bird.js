function Bird() {
    this.x = 94;
    this.y = height/2;
    this.size = 30;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    
    this.up = function () {
        this.velocity += this.lift;
    }

    this.show = function(r,g,b) {
        fill(r,g,b);
        circle(this.x, this.y, this.size);        
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if(this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

}