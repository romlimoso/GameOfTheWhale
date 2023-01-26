let posX;
let posY;
let rotation;
let speed

let img
let bg

function preload(){
	img = loadImage('whale3.png')
  bg = loadImage('blue-blurred.png')

 }

function setup() {
    const playingField = createCanvas(1500, 800);
    playingField.parent("game")
    let mouseX
    let mouseY
    setupGOL()
    

  // Connect Steering to Keys
    posX = width / 2;
    posY = height / 2;
  
    speed = function() {
      if(keyIsDown(UP_ARROW)){
        return 12
      } else {
        return 6
      } 
    }
    //createSlider(0, 10, 2, 0.001).position(100, 20)  ;
    //rotation = createSlider(0, TWO_PI, 0, 0.001).position(20, 20);
    let orientation = 0
    rotation = function(){             
        if (keyIsDown(LEFT_ARROW)){
            orientation -= PI/4/30
        } else if (keyIsDown(RIGHT_ARROW)){
            orientation += PI/4/30
        }
        return orientation  
    }
}

function draw() {
  frameRate(30)
  drawGOL()

  // set context
/*   background(0);
  fill(255);
  noStroke();
 */  imageMode(CENTER)

  // map rotation to polar (circular) coordinates
  posX = posX + cos(rotation()) * speed();
  posY = posY + sin(rotation()) * speed();            
  
  // wrap around screen
  if(posX >= width) posX = 0;
  if(posY >= height) posY = 0;
  if(posX < 0) posX = width;
  if(posY < 0) posY = height;
  
  // move, rotate and draw arrow
  push();
  
  translate(posX, posY);
  rotate(rotation()+PI/2);
  //rect(0, 0, 80, 20);
  //triangle(60, 0, 10, 40, 10, -40);
  image(img, 0, 0, 80, 150)
  pop();

  collusion()

/*   // visualize polar coordinates we're using to move
  let circleRadius = speed.value() * 5;
  push();
  translate(width - 50, 50);
  stroke(255);
  noFill();

  // draw circle
  circle(0, 0, circleRadius * 2);
  
  // draw radians
  let circX = cos(rotation()) * circleRadius;
  let circY = sin(rotation()) * circleRadius;
  fill(0);
  circle(circX, circY, circleRadius * 0.4);
  line(0, 0, circX, circY);
  pop(); */
}