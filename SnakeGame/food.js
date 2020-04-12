
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
        console.log(this.x);
    }
  }