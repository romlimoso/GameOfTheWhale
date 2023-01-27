/* 
let backgrounds = []
let board1 = []



 // Create basic board
board1 = new Array(columns);
for (let i = 0; i < columns; i++) {
    board1[i] = new Array(rows)
}

for (let i=0; i < columns; i++){
    for (let j=0; j < rows; j++ ) {
        board1[i][j] = 0
        console.log(board1[i][j])
    }
}
backgrounds.push(1)


for (let i=0; i < 10; i++){
    backgrounds.push(newBoard())
}


//// Complete new board 

function newBoard() {

// Fill board randomly
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            // Lining the edges with 0s
            if (i == 0 || j == 0 || i == columns-1 || j == rows-1) {
                board1[i][j] = 0;
            }
            // Filling the rest randomly
            else board1[i][j] = Math.floor(Math.random(1.1));
        }
    }
// Color all grid-cells according to their cell-entry
    for ( let i = 0; i < columns-1; i++) {
        for ( let j = 0; j < rows-1; j++) {
            if (board1[i][j] == 1){ 
                fill(2, 200, 255, 60)
                stroke(2, 200, 9*j*i*w/height, 1); 
                ellipse(i * w, j * w, w*2, w*2)
                fill(2, 230, 9*j*i*w/height)
                ellipse(i * w, j * w, w/2, w/2)
            }      
        }
    }
return board1
 // Now determine exact cell-entries for next generation 
// according to the "Game of Life"

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
            if      ((board[x][y] == 1) && (neighbors <  2)) nextBoard[x][y] = 0;           // Loneliness
            else if ((board[x][y] == 1) && (neighbors >  3)) nextBoard[x][y] = 0;           // Overpopulation
            else if ((board[x][y] == 0) && (neighbors == 3)) nextBoard[x][y] = 1;           // Reproduction
            else                                   nextBoard[x][y] = board[x][y];           // Stasis

        }
    }
console.log(board,nextBoard)

    if (backgrounds.length < 10) {
        backgrounds.push(nextBoard)
    }

    // Now let's make this new generation 
    // the current generation and put the 
    // old one aside (-> oldBoard )

    let oldBoard = board;
    board = nextBoard;
    nextBoard = oldBoard;
    return board
 */




 