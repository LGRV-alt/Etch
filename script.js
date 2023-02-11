console.log("Hello")

let score = 16


const create = document.getElementById("create");
const reset = document.getElementById("reset");



// create.addEventListener("click", function(){
//     makeSomething();
// })


let makeSomething = function(){
    for(let i = 0; i < score; i++){
        let div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.outline = "solid";
            
        document.getElementById("board").appendChild(div);

        div.addEventListener("mouseover", function(){
            div.style.background = "white";

        reset.addEventListener("click", function(){
            div.style.background = "red";
        })
        })
        
    }
}

// create.addEventListener("click", function(){
//     makeSomething();
// })

create.addEventListener("click", makeSomething);
create.addEventListener("click", function(){
    create.disabled = true;
})

reset.addEventListener("click", function(){
    div.style.background = "red";
})


let colorBlock = function(){
    div.addEventListener("click", function(){
        div.style.background="white";
    })
}







