
let w;
let columns;
let rows;
let board;
let next;
let transition
let changes

function setupGOL(){
/// I set up the grid fo the Game of Life, covering the whole canvas.
    
    // w is the width of one column or row
    w = 12;

    // Calculate the resulting grid
    columns = floor(width / w);
    rows = floor(height / w);

    // Create matrix rows x columns
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
    }
    // Second matrix for temporary storage of next generation of GOL
    next = new Array(columns);
    for (let i = 0; i < columns; i++) {
      next[i] = new Array(rows);
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
      board[floor(mouseX/w)][floor(mouseY/w)] = 1
      board[floor(mouseX/w)][floor(mouseY/w)+1] = 1
      board[floor(mouseX/w)+2][floor(mouseY/w)+1] = 1
      board[floor(mouseX/w)+1][floor(mouseY/w)+2] = 1
    }

    for ( let i = 0; i < columns; i++) {
      for ( let j = 0; j < rows; j++) {
        if (board[i][j] == 1){ 
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
        if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
        // Filling the rest randomly
        else board[i][j] = floor(random(1.1 ));
        next[i][j] = 0;

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
                        neighbors += board[x+i][y+j];
                    }
                }
    
                // We subtract the current cell's state since
                // we added it in the above loop
                neighbors -= board[x][y];
                // Rules of Life
                if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
                else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
                else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
                else                                             next[x][y] = board[x][y]; // Stasis
                
            }
        }
  
    // Now let's make this new generation 
    // the current generation and put the 
    // old one aside (->"temp" )

    transition = next - board
    let temp = board;
    board = next;
    next = temp;
    
  }