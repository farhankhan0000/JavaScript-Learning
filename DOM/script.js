// let element = document.querySelector("#myId");//1stelement
// let elements = document.querySelectorAll(".myClass");
// console.dir(elements);
// console.dir(element);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir("div");

// let heading = document.querySelector("h1");

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para);

// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";

// div.innerText = "Hello";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// console.dir(newBtn);

// let para = document.querySelector("p");
// para.after(newBtn);


// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Learning AI Engineering!</i>";
// document.querySelector("body").prepend(newHeading);

// para.remove();

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) =>{
    console.log("You are inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};