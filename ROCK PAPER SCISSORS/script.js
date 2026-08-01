let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
}

choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked!", userChoice);
        playGame(userChoice);
    })
})