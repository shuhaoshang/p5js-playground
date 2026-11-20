var entireSize = 100;
var openEye = 400;
var xPos;
var yPos;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
  background(250);
  fill(250);
  noStroke();
  ellipse(width / 2, height / 2, entireSize, entireSize);

  // fill(130, 37, 49);
  // ellipse(width / 2, height / 2, entireSize / 2, entireSize / 2);
  push();
  fill(250);
  stroke(60);
  strokeWeight(4);
  ellipse(xPos, yPos, entireSize / 2.5, entireSize / 2.5);
  angle = atan2(mouseY - height / 2, mouseX - width / 2);
  r = dist(width / 2, height / 2, mouseX, mouseY);
  if (r < 20) {
    r = dist(width / 2, height / 2, mouseX, mouseY)
  } else {
    r = 20;
  }
  xPos = width / 2 + cos(angle) * r;
  yPos = height / 2 + sin(angle) * r;
  pop();

  push();
  fill(250);
  stroke(60);
  strokeWeight(4);
  beginShape();
  vertex(width / 2 - 50, height / 2);
  bezierVertex(width / 2 - (entireSize * 0.50), height / 2 - (entireSize * 0.67), width / 2 + (entireSize * 0.50), height / 2 - (entireSize * 0.67), width / 2 + entireSize / 2, height / 2);
  vertex(width / 2 + 50, height / 2);
  bezierVertex(width / 2 + (entireSize * 0.50), height / 2, width / 2, map(openEye, 0, height, height / 2, height / 2 - 110), width / 2 - 50, height / 2);
  endShape();
  pop();

  push();
  fill(250);
  stroke(60);
  strokeWeight(4);
  beginShape();
  vertex(width / 2 - 50, height / 2);
  bezierVertex(width / 2 - (entireSize * 0.50), height / 2 + (entireSize * 0.67), width / 2 + (entireSize * 0.50), height / 2 + (entireSize * 0.67), width / 2 + entireSize / 2, height / 2);
  vertex(width / 2 + 50, height / 2);
  bezierVertex(width / 2 + (entireSize * 0.50), height / 2, width / 2, map(openEye, 0, height, height / 2, height / 2 + 100), width / 2 - entireSize / 2, height / 2);
  endShape();
  pop();

  var randomValue = [];

  for (var i = 0; i < 100; i++) {
    randomValue.push(i);
  }
  var number = random(randomValue);

  var speed = 0.05;

  if (number == 5) {
    console.log("this.openEye", this.openEye);
    openEye = 0;
  } else {
    openEye = 300 * speed + openEye * (1.0 - speed);
  }
  push();
  textSize(22);
  textAlign(CENTER);
  fill(20);
  textFont("Helvetica");
  textSize(38);
  text("Creative Eye", width / 2, height / 2 + 100);
  
  pop();

  push();
  noFill();
  stroke(20);
  strokeWeight(5);
  triangle(windowWidth / 2, windowHeight / 2 - 120,
    windowWidth / 2 + 100, windowHeight / 2 + 60,
    windowWidth / 2 - 100, windowHeight / 2 + 60);

  pop();

  // push();
  // fill(0, 0, 255);
  // text("control_point_1", width / 2 - 55, height / 2 - 55);
  // ellipse(width / 2 - 52, height / 2 - 55, 10, 10);

  // fill(0, 255, 0);
  // text("control_point_2", width / 2 + 40, height / 2 - 80);
  // ellipse(width / 2 + 40, height / 2 - 80, 10, 10);

  // fill(255, 0, 0);
  // text("anchor_point", width / 2 + 50, height / 2);
  // ellipse(width / 2 + 50, height / 2, 10, 10);

  // fill(255, 255, 0);
  // text("vertex", width / 2 - 50, height / 2);
  // ellipse(width / 2 + 50, height / 2, 10, 10);
  // pop();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w, h);
  width = w;
  height = h;
};