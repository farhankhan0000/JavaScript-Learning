let game_number = 25;
let user_guessed_number = prompt("Guess the Game number");
console.log(user_guessed_number);

while(game_number != user_guessed_number){
    if (game_number > user_guessed_number){
        console.log("Higher number please");
    }
    else if(game_number < user_guessed_number){
        console.log("Lower number please");
    }
    user_guessed_number = prompt("You entered wrong number guess again");
}

console.log("congratulations your number matched!")
