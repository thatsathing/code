function Paddle(type) {
    this.y = width/2;
    this.height = 180;
    this.type = type;
}

Paddle.prototype.checkCollision = function() {
    if (this.y <= this.height/2) {
        this.y = this.height/2;
    }
    if (this.y >= height - this.height/2) {
        this.y = height - this.height/2
    }
}

Paddle.prototype.show = function() {
    rectMode(CENTER);
    fill(255);
    if (this.type == 0) {
        rect(20,this.y,10,this.height);
    }
    if (this.type == 1) {
        rect(width-20,this.y,10,this.height);
    }
}
