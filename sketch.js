function setup() {
    createCanvas(1000, 1000);
    background("black");
  }
  
  function draw() {
   
    stroke("green");
    fill("blue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 50,);
    }
  }
