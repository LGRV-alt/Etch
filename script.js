console.log("Hello")

let size = 20
let color = "white"

let changing = "noChange"

//Buttons from the page
const reset = document.getElementById("reset");
const container = document.getElementById("board");
const black = document.getElementById("black");
const random = document.getElementById("random");
const erase = document.getElementById("erase");
const ten = document.getElementById("10x10");
const twenty = document.getElementById("20x20");
const thirty = document.getElementById("30x30");


container.style.backgroundColor = "white";




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



// Removes the DOM items 
let blank = function(){
    board.innerHTML = ""
}

// Resets the player board 
let = resetBoard = function(){
    blank();
    makeGrid();
}

// Makes the board 10X10
let makeTen = function(){
    blank();
    size = 10;
    makeGrid();
}

// Makes the board 20X20
let makeTwenty = function(){
    blank();
    size = 20;
    makeGrid();
}

// Makes the board 30X30 
let makeThirty = function(){
    blank();
    size = 30;
    makeGrid();
}

// Color changes with linked to buttons
let changeColor = function(){
    black.addEventListener("click", function(){
        changing = "noChange";
        color = "black";
        colorChanging();
        console.log(changing)
        console.log(color);
    })

    random.addEventListener("click", function(){
        changing = "change";
        colorChanging();
        console.log(changing)
        console.log(color);
    })

    erase.addEventListener("click", function(){
        color = "white";
        console.log(changing)
    })

}



// Creates a string of 6 with random numbers and letters
function generateColor(){
    const hexArray = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "";
    for (let i=0; i<6; i++){
        color += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${color}`
}

// Sets the generateColor() function change every 10ms
// function randomColor(){
//     if(changing !== "noChange"){
//     setInterval(
//         function() {
//             color = generateColor();
//         }, 1)}else{


//         }
// }


function randomColor(){
    color = generateColor();
}

function colorChanging(){
    if(changing ==="change"){
        setInterval(randomColor, 1);
    } else{
        clearInterval(randomColor);
    }
}



// Game function
let play = function(){
    makeGrid();
    
    reset.addEventListener("click", resetBoard);
    ten.addEventListener("click", makeTen);
    twenty.addEventListener("click", makeTwenty);
    thirty.addEventListener("click", makeThirty);
    // random.addEventListener("click", colorChanging);
    changeColor();
    


}


// Calls to play the game
play();















