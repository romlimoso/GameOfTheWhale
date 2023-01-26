
let w;
let columns;
let rows;
let board;
let next
let transition
let changes
let matrix
let nextMatrix

function setupGOL(){
/// I set up the grid fo the Game of Life, covering the whole canvas.
    
    // w is the width of one column or row
    w = 12;

    // Calculate the resulting grid
    columns = floor(width / w);
    rows = floor(height / w);

    // Create matrix rows x columns
    matrix = new Array(columns);
    for (let i = 0; i < columns; i++) {
      matrix[i] = new Array(rows);
    }
    // Second matrix for temporary storage of next generation of GOL
    nextMatrix = new Array(columns);
    for (let i = 0; i < columns; i++) {
      nextMatrix[i] = new Array(rows);
    }
    // Third matrix for temporary storage of transition-period of current and next generation
    transition = new Array(columns);
    for (let i = 0; i < columns; i++) {
      transition[i] = new Array(rows);
    }


    newGOL();
}

function drawGOL(){

    //background(0, 92, 250);
    
    image(bg, width/2, height/2, 1500, 800)
    //background(bg)
    
    
    generate();
      
    if ( state === 1 && mouseIsPressed === true) {
      matrix[floor(mouseX/w)][floor(mouseY/w)] = 1
      matrix[floor(mouseX/w)][floor(mouseY/w)+1] = 1
      matrix[floor(mouseX/w)+2][floor(mouseY/w)+1] = 1
      matrix[floor(mouseX/w)+1][floor(mouseY/w)+2] = 1
    }

    for ( let i = 0; i < columns-1; i++) {
      for ( let j = 0; j < rows-1; j++) {
        if (matrix[i][j] == 1){ 
            fill(2, 200, 255, 60)
            stroke(2, 200, 9*j*i*w/height, 1); 
            ellipse(i * w, j * w, w*2, w*2)
            fill(2, 230, 9*j*i*w/height)
            ellipse(i * w, j * w, w/2, w/2)
            
        } else {
 //           fill(0, 92, 250);
   //         stroke(0, 92, 250);
     //       rect(i * w, j * w, w-1, w-1)
          }
        }
      }
    }


// reset board when mouse is pressed
function mousePressed() {
    if (state != 1) {newGOL();}
}
 
// Fill board randomly
function newGOL() {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Lining the edges with 0s
        if (i == 0 || j == 0 || i == columns-1 || j == rows-1) matrix[i][j] = 0;
        // Filling the rest randomly
        else matrix[i][j] = floor(random(1.1));
        nextMatrix[i][j] = 0;


      }
    }
    
    //console.log(floor(posX/w),floor(posY/w))
//    console.log(board[floor(posX/w)][floor(posY/w)]) ;
}
  
  // The process of creating the new generation
  function generate() {
        
        // Loop through every spot in our 2D array and check spots neighbors
        for (let x = 1; x < columns - 1; x++) {
            for (let y = 1; y < rows - 1; y++) {
                // Add up all the states in a 3x3 surrounding grid
                let neighbors = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        neighbors += matrix[x+i][y+j];
                    }
                }
    
                // We subtract the current cell's state since
                // we added it in the above loop
                neighbors -= matrix[x][y];
                // Rules of Life
                if      ((matrix[x][y] == 1) && (neighbors <  2)) nextMatrix[x][y] = 0;           // Loneliness
                else if ((matrix[x][y] == 1) && (neighbors >  3)) nextMatrix[x][y] = 0;           // Overpopulation
                else if ((matrix[x][y] == 0) && (neighbors == 3)) nextMatrix[x][y] = 1;           // Reproduction
                else                                                    nextMatrix[x][y] = matrix[x][y]; // Stasis

            }
        }
  
    // Now let's make this new generation 
    // the current generation and put the 
    // old one aside (-> temp )

    transition = nextMatrix - matrix
    let temp = matrix;
    matrix = nextMatrix;
    nextMatrix = temp;
    
  }