function Ship(x, y) {
    this.x = x;
    this.y = y;
    this.size = 15;   
    this.finished = false;

    this.show = function() {
        fill(255,0,0);
        circle(this.x, this.y, this.size);
    }

    this.move = function(y) {
        if(!this.finished) {
            this.y = this.y + y;    
            this.y = constrain(this.y, 0, 580);    
        }
    }

    this.isFinished = function() {
        if(this.y === 0) {
            this.finished = true;
        }
    }

    this.collides = function(b) {       
		let dx = b.x - this.x;
	    let dy = b.y - this.y;
		let distance = Math.sqrt(dx*dx+dy*dy);

		if(distance < this.size/2 + b.size/2) {
            this.y = 580;
        }	
    }

}