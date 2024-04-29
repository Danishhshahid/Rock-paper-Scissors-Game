"use strict";
// Rock Paper Scissor Assignment from Miss Hina
//Date 29- Apr-2024 //Sunday
function choices(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    else if (choice1 == "rock") {
        if (choice2 == "scissors") {
            return `Rock Wins`;
        }
        else {
            return `Paper Wins`;
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return `Paper Wins`;
        }
        else {
            return `Scissors wins`;
        }
    }
    else if (choice1 == "scissors") {
        if (choice2 == "paper") {
            return `Scissors Wins`;
        }
        else {
            return `Rock Wins`;
        }
    }
}
console.log(choices("rock", "scissors")); // rocks wins
console.log(choices("paper", "scissors")); // scissors wins
console.log(choices("rock", "paper")); // paper wins
