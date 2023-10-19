function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("rgb(176,0,255)");
  fill("black");
    
  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
