console.log("Hello")

let size = 16


const create = document.getElementById("create");
const reset = document.getElementById("reset");
const container = document.getElementById("board");
container.style.backgroundColor = "red";
container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr`



let makeSomething = function(){
    for (let i = 0; i < size * size; i++){
        let cell = document.createElement("div");
        document.getElementById("board").appendChild(cell);
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = "white";
        })
    }
}

create.addEventListener("click", makeSomething);


create.addEventListener("click", function(){
    create.disabled = true;
})











