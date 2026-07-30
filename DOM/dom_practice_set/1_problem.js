// let divs = document.querySelectorAll(".box");
// console.log(divs);

// // divs[0].innerText = "Yo";
// // divs[1].innerText = "Hello";
// // divs[2].innerText = "Sayonara";

// for(let i = 0; i <divs.length; i++){
//     divs[i].innerText = `new unique value ${i}`;
// }

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);



// // q2

// let para = document.querySelector("p");

let modeBtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body")

modeBtn.addEventListener("click", () => {
    if(currmode == "light"){
        currmode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
});



