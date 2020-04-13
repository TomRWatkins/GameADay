function Cross(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(0);
        line(this.x+50, this.y-50, this.x-50, this.y+50);
        line(this.x+50, this.y+50, this.x-50, this.y-50);
    }
}