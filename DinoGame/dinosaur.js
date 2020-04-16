function Dino() {
    this.r = 50;
    this.x = this.r * 2;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;
    this.l = 50;
    this.w = 50;

    this.show = function() {
        fill(255, 0, 100);
        rect(this.x, this.y, this.l, this.w);
    }

    this.jump = function() {
        //if(this.y === height - this.r)
            this.vy = -14;
    }

    this.move = function() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height-this.r);
    }
}