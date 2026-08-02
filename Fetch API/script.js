const URL = "https://dogapi.dog/api/v2/breeds";
const breedName = document.querySelector("#name");
const btn = document.querySelector("#btn");

const getFacts = async () =>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response); //JSON Format
    let data = await response.json();
    //console.log(data.data[0]);
    breedName.innerText = data.data[0].attributes.name;
};

btn.addEventListener("click", getFacts);