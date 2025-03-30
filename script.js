// console.log("heyo1");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    let randomChoice = randomInt(1, 3);
    switch (randomChoice) {
        case 1:
            return "rock";
        
        case 2:
            return "paper";
        
        case 3:
            return "scissors";

        default:
            console.error("Weird random number!");
            return "weird random number generated!";
    }
}

// Test random distribution
// for (let i = 0; i < 50; i++) {
//     console.log(getComputerChoice());
// }

function getHumanChoice() {
    let choice = prompt("Pick your weapon: ");
    console.log(choice);
}

let humanScore = 0;
let computerScore = 0;