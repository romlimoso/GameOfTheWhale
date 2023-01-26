let score = 0;

function collision() {
// We compare the current location of the 
// image of the player with the grid-cell of 
// the same location and all direct neighbours

    let x = floor(posX/w)
    let y = floor(posY/w)
    //  console.log(x,y)
    
    
    for (let i=-1; i<2; i++){
        for (let j=-1; j<2; j++) {
            if (x+i > 1 && x+i < floor(width/w)) {
                if (matrix[x+i][y+j] === 1) {                   
                        matrix[x+i][y+j] = 0
                        score++
                }
            }
        }   
    } 
    // I display the score outside the P5 canvas
    // console.log(score)
    const points = document.getElementById("score")
    points.innerHTML = `Score: ${score}`
}

    
