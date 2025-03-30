// console.log("heyo1");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeText(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
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
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();

    //For keeping track who won and print message accordingly
    let oriHumanScore = humanScore;
    let oriCompScore = computerScore;

    if(computerChoice === humanChoice){
        console.log(`Draw! You both drew ${capitalizeText(computerChoice)}`)
        return;
    }

    if(!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")){
        console.error("Invalid human input!");
        return;
    }
    
    if(computerChoice === "rock"){
        if(humanChoice === "paper"){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    else if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            computerScore++;
        }
        else{
            humanScore++;
        }
    }
    else if(computerChoice === "scissors"){
        if(humanChoice === "rock"){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    else{
        console.error("Invalid input");
        return;
    }

    if(oriHumanScore !== humanScore){
        console.log(`You win! your ${capitalizeText(humanChoice)} beats computer's ${capitalizeText(computerChoice)}`);
    }
    else{
        console.log(`You lose! computer's ${capitalizeText(computerChoice)} beats your ${capitalizeText(humanChoice)}`);
    }
}

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    if (humanScore > computerScore){
        console.log(`You win! ${humanScore}:${computerScore}`);
    }
    else if (humanScore < computerScore){
        console.log(`You lose! ${humanScore}:${computerScore}`);
    }
    else{
        console.log(`Draw! ${humanScore}:${computerScore}`);
    }
}

playGame();