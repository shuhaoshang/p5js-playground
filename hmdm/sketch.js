var eyeBallH = 300;
var xPos;//black eye 
var yPos;//black eye
var r;//radius distance from eye center to mouse
var angle;
var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);


}

function draw() {
  background(0);
  // Eyeball
  ellipse(width / 2, height / 2, 300, eyeBallH)


  //Black eye
  push();
  rectMode(CENTER);
  fill(0);
  ellipse(xPos, yPos, 45, 45);

  // Moving black eye in a circle

  angle = atan2(touchY - height / 2, touchX - width / 2);
  r = dist(width / 2, height / 2, touchX, touchY);
  if (r < 100) {
    r = dist(width / 2, height / 2, touchX, touchY)
  }else{
    r=100;
  }
  xPos = width / 2 + cos(angle) * r;
  yPos = height / 2 + sin(angle) * r;


  // Moving black eye on a circle path 

  // var r= 40;
  // var angle = atan2(mouseY - height / 2, mouseX - width / 2);
  // xPos = mouseX;
  // if (xPos > xPos + cos(angle) * r) {
  //   xPos = width / 2 + cos(angle) * r;
  // }

  // if (xPos < xPos + cos(angle) * r) {
  //   xPos = width / 2 + cos(angle) * r;
  // }
  // yPos = mouseY;
  // if (yPos > yPos + sin(angle) * r) {
  //   yPos = height / 2 + sin(angle) * r;
  // }
  // if (yPos < yPos + sin(angle) * r) {
  //   yPos = height / 2 + sin(angle) * r;
  // }


  // Moving black eye in a rectangle shape

  // xPos = mouseX;
  // if (xPos > width / 2 + r) {
  //   xPos = width / 2 + r;
  // }

  // if (xPos < width / 2 - r) {
  //   xPos = width / 2 - r;
  // }


  // yPos = mouseY;
  // if (yPos > height / 2 + r) {
  //   yPos = height / 2 + r;
  // }

  // if (yPos < height / 2 - r) {
  //   yPos = height / 2 - r;
  // }  

  pop();
}

function mousePressed(){
  eyeBallH = 20;
}

function mouseReleased() {
  eyeBallH = 300;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w, h);
  width = w;
  height = h;
};