let divs = document.querySelectorAll(".box");
console.log(divs);

// divs[0].innerText = "Yo";
// divs[1].innerText = "Hello";
// divs[2].innerText = "Sayonara";

for(let i = 0; i <divs.length; i++){
    divs[i].innerText = `new unique value ${i}`;
}