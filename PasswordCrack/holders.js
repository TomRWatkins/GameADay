function Holders(x) {
    this.x = x;
    this.y = 250;
    this.sq = 40;
    this.correct = false;

    this.show = function() {
        if(this.correct) {
            fill(0, 255, 0);
        }
        else {
            fill(255, 0, 0);
        }
        rect(this.x, this.y, this.sq, this.sq);
    }

}