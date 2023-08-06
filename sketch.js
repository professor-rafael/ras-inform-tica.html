function setup() {
    createCanvas(1000, 1000);
    background("white");
  }
  
  function draw() {
   
    stroke("green");
    fill("blue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 50,);
    }
  }