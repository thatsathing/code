var ball;
var paddleLeft;
var paddleRight;

var ballRad = 10;

var scoreLeft = 0;
var scoreRight = 0;

function setup() {
    createCanvas(windowWidth-4,windowHeight-4);
    noStroke();
    ball = new Ball();
    paddleLeft = new Paddle(0);
    paddleRight = new Paddle(1);
}

function draw() {
    background(0);
    ball.show();
    ball.update();
    checkKeys();
    paddleLeft.show();
    paddleRight.show();
    showScore();
}

function checkKeys() {
    if (keyIsDown(UP_ARROW)) {
        paddleRight.y -= 5;
        paddleRight.checkCollision();
    }
    if (keyIsDown(DOWN_ARROW)) {
        paddleRight.y += 5;
        paddleRight.checkCollision();
    }
    if (keyIsDown(87)) {
        paddleLeft.y -= 5;
        paddleLeft.checkCollision();
    }
    if (keyIsDown(83)) {
        paddleLeft.y += 5;
        paddleLeft.checkCollision();
    }
    if (keyIsDown(82)) {
        ball = new Ball();
    }
}

function showScore() {
    textAlign(TOP,CENTER);
    textSize(24);
    fill(255);
    textFont("courier new");
    text(scoreLeft + " - " + scoreRight, width/2, 40);
}