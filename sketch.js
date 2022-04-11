let posX = new Array(100);
let posY = new Array(100);
let posVX = new Array(100);
let posVY = new Array(100);

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i=0; i<200; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    posVX[i] = 0;
    posVY[i] = 0;
  }
}

function draw() {
  background(0);
  
    for (let i=99; i>=0; i--) {
    posX[i] = posX[i-1];
    posY[i] = posY[i-1];
  }
  
    posX[0] = mouseX;
  posY[0] = mouseY;
  for (let i=190; i>=0; i--) {
    rect(posX[i], posY[i], 10+i*0, 10+i*7, 10+i*2);
    
  fill(30,120,255,0);
  stroke(255);
  }
  
}