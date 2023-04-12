function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  
  addX = random(-3, 3)
  addY = random(-3, 3)
  
ouros = []
    for (let ourosDefined = 0; ourosDefined < 50; ourosDefined++) {
    let x = random(width);
    let y = random(height);
    ouros.push(new Ouro(x, y));
  }
}

function draw() {
  background(220);
  
    for (let ourosShown = 0; ourosShown < ouros.length; ourosShown++) {
    // 7. Set the array offsets to the counter:
    ouros[ourosShown].update();
    ouros[ourosShown].show();
  }
}

class Ouro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.addY = addY;
  }
  update() {
    this.x = this.x + this.addX;
    this.y = this.y + this.addY;
    // Reverse if it hits a wall.
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    let isTooFarUp = (this.y < 0);
    let isTooFarDown = (this.y > height);
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;}
      if (isTooFarUp || isTooFarDown){
      this.addY = -this.addY;
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    addOuro(0, 0, 1);
    pop();
  }
}

function addOuro(x, y, size) {
  push();
  let redAng1 = 190;
  let redAng2 = 350;
  let bluAng1 = 10;
  let bluAng2 = 170;
  translate(x, y);
  scale(size);
  noStroke();
  //upper serpent
  fill("red");
  arc(0, 0, 50, 50, redAng1, redAng2);
  //lower serpent
  fill("blue");
  arc(0, 0, 50, 50, bluAng1, bluAng2);
  //metal plate
  fill("silver");
  ellipse(0, 0, 40);
  //crystal outline
  fill("darkorchid");
  ellipse(0, 0, 30);
  //crystal core
  fill("indigo");
  ellipse(0, 0, 25);
  pop();
}
