function Ship() {
    this.x = 300;
    this.y = 550;
    this.r = 20;
    
    this.show = function() {      
        fill(155, 144, 55);
        ellipse(this.x,this.y,40);
    }
    
    this.update = function(dir) {
        this.x += dir;
        if(this.x > 580) this.x = 580;
        else if(this.x < 20) this.x = 20;
    }    

}