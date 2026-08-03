// const URL = "https://dogapi.dog/api/v2/breeds";
// const breedName = document.querySelector("#name");
// const btn = document.querySelector("#btn");

// const getFacts = async () =>{
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response); //JSON Format
//     let data = await response.json();
//     //console.log(data.data[0]);
//     breedName.innerText = data.data[2].attributes.name;
// };

// // function getFacts(){
// //     fetch(URL).then((response) => {
// //         return response.json();
// //     }).then((data) => {
// //         console.log(data);
// //         breedName.innerText = data.data[0].attributes.name;
// //     });
// // };

// btn.addEventListener("click", getFacts);

let x = fetch("https://dogapi.dog/api/v2/breeds");
console.log(x);
console.log(typeof x);
console.log(x instanceof Promise);