let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame = () =>{
    msg.innerText = "Game Tied!😯 Play Again"
    console.log("Game was draw!");
    msg.style.backgroundColor = "#0831b1";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin == true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!🎉 Your ${userChoice} beats  Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose!😔 Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        if(userChoice === "paper"){
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }
        if(userChoice === "scissors"){
            //rock, paper
            userWin == compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})