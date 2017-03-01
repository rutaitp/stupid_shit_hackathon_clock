var aSecond = 1000;
var theTime = [];
var theClock;


function preload() {
    theclock = loadImage('deviceAlert.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight)

}

// here is init!
setInterval(countTime, aSecond);

function countTime() {
    theClock = new makeTime(theclock, random(-100, width), random(-100, height));
    theClock.appear();

}

function makeTime(emoji, x, y) {
    this.x = x;
    this.y = y;
    this.emoji = emoji;

    this.appear = function() {
        image(this.emoji, this.x, this.y)
    }
    // this does nothing, want to build it out. no hackathon time
    this.fall = function() {
        this.y = windowHeight;
    }

}
