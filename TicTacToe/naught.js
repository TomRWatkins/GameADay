function Naught(x,y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(0);        
        circle(this.x,this.y,150);
        fill(255,255,255);        
        circle(this.x,this.y,130);
    }
}