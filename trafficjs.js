// Declare variables to store the current state of the traffic light and label elements
let lightState = 0;
let stopLabel; 
let slowLabel;
let goLabel;

function setup() {
  // Create canvas animation
  createCanvas(400, 400);
  
  // Label elements "STOP", "SLOW" and "GO"
  stopLabel = createElement("h2", "STOP");
  slowLabel = createElement("h2", "SLOW");
  goLabel = createElement("h2", "GO");
  
  // Hide label default
  stopLabel.hide();
  slowLabel.hide();
  goLabel.hide();
}

function draw() {
  
  
  // Draw traffic light rect
  fill(0);
  rect(50, 50, 100, 300);
  
  // Draw circles in the current state of the traffic light
  if (lightState == 0) {
    // Red circle "STOP" state
    fill("red");
    ellipse(100, 100, 50);
    
    // Show "STOP" label and hide other labels
    stopLabel.show();
    slowLabel.hide();
    goLabel.hide();
  } else if (lightState == 1) {
    // Orange circle for the "SLOW" state
    fill("orange");
    ellipse(100, 200, 50);
    
    // Show the "SLOW" label and hide the other labels
    stopLabel.hide();
    slowLabel.show();
    goLabel.hide();
  } else {
    // Green circle for the "GO" state
    fill("green");
    ellipse(100, 300, 50);
    
    // Show the "GO" label and hide the other labels
    stopLabel.hide();
    slowLabel.hide();
    goLabel.show();
  }
}

function mouseClicked() {
  // Cycle through the states when the mouse is clicked
  lightState = (lightState + 1) % 3;
}

//when the function is first called, lightState will be set to 1 (since 0 + 1 % 3 = 1), and each subsequent click will cycle through the values 2 and 0 before returning to 1.
