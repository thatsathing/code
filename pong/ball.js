function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.yVel = random(-3,3);
    this.xVel = random(-3,3);
    if (this.yVel <= 1 && this.yVel >= -1) {
        this.yVel *= 2;
    }
    if (this.xVel <= 1 && this.yVel >= -1) {
        this.xVel *= 2;
    }
}

Ball.prototype.show = function() {
    ellipseMode(CENTER);
    fill(255);
    ellipse(this.x,this.y,ballRad*2,ballRad*2)
}

Ball.prototype.update = function() {
    this.x += this.xVel
    this.y += this.yVel
    this.checkCollision();
}

Ball.prototype.checkCollision = function() {

    // Check Boundary with Left Paddle
    if (this.x - 25 <= 5 + ballRad && this.y <= paddleLeft.y+paddleLeft.height/2 && this.y >= paddleLeft.y-paddleLeft.height/2) {
        this.x = 25 + ballRad + 2;
        this.xVel *= -1.05;
        this.yVel *= random(0.96,1.05);
    }

    // Check Boundary with Right Paddle
    if (width-25 - this.x <= 5 + ballRad && this.y <= paddleRight.y+paddleRight.height/2 && this.y >= paddleRight.y-paddleRight.height/2) {
        this.x = width-20 - ballRad - 7;
        this.xVel *= -1.05;
        this.yVel *= random(0.95,1.05);
    }

    // Check Upper boundary
    if (this.y-ballRad<=0) {
        this.y = ballRad+1;
        this.yVel *= -1
    }

    // Check Lower boundary
    if (this.y+ballRad>=height) {
        this.y = height-ballRad-1;
        this.yVel *= -1
    }

    // Check Left boundary
    if (this.x-ballRad<=0) {
        scoreRight++;
        this.resetVars();
    }

    // Check Right boundary
    if (this.x+ballRad>=width) {
        scoreLeft++;
        this.resetVars();
    }
}

Ball.prototype.resetVars = function() {
    this.x = width/2
    this.y = width/2
    this.xVel = random(-4,4);
    this.yVel = random(-4,4);
}