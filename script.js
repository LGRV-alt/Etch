console.log("Hello")

let size = 20

let color = "white"
//Buttons from the page
const create = document.getElementById("create");
const reset = document.getElementById("reset");
const container = document.getElementById("board");
const black = document.getElementById("black");
const red = document.getElementById("red");
const erase = document.getElementById("erase");
const board = document.getElementById("board");
const ten = document.getElementById("10x10");


container.style.backgroundColor = "white";
// container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr`



let makeGrid = function(){
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr`
    for (let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add("boxes")
        container.appendChild(cell).classList.add("boxes");
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = `${color}`;
        })
        }
    }

// let resetBoard = function(){
//     board.innerHTML = "";
// }

let blank = function(){
    board.innerHTML = ""
}

let resetBoard = function(){
    ten.addEventListener("click", function(){
        blank();
        size = 10;
        makeGrid();
    })

}


let changeColor = function(){
    black.addEventListener("click", function(){
        color = "black";
    })
    red.addEventListener("click", function(){
        color = "red";
    })
    erase.addEventListener("click", function(){
        color = "white";
    })
}





let play = function(){
    create.addEventListener("click", makeGrid);
    reset.addEventListener("click", resetBoard);
    changeColor();

}



play();







// create.addEventListener("click", function(){
//     create.disabled = true;
// })

// reset.addEventListener("click", function(){
//     cell.style.backgroundColor = "white";
// })











