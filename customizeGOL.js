let state = 0 

const clearField = document.querySelector("#clearField")
clearField.addEventListener("click", newGOL())  

function clear(){
    state = 0
    location.reload();
}


const randomPlankton = document.querySelector("#randomPlankton")
randomPlankton.addEventListener("click", random)  

function random(){
    state = 1
}



const addPlankton = document.querySelector("#oneDot")
addPlankton.addEventListener("click", counter)

function counter(){
    state = 2
}




//console.log(mouseX,mouseY)