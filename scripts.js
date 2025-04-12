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

function capitalizeText(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Test random distribution
// for (let i = 0; i < 50; i++) {
//     console.log(getComputerChoice());
// }

function getHumanChoice() {
    let choice = prompt("Pick your weapon: ");
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();

    //For keeping track who won and print message accordingly
    let oriHumanScore = humanScore;    

    if(!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")){
        console.error("Invalid human input!");
        return;
    }
    roundPlayed++;
    if(computerChoice === humanChoice){
        humanScore++;
        computerScore++;
        tieScore++;
        console.log(`Draw! You both drew ${capitalizeText(computerChoice)}`)        
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

function playGame(nWins) {
    while (true) {
        playRound();
        if(humanScore === nWins || computerScore === nWins){
            break;
        }
    }

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

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundPlayed = 0;
let winGoals = 0;

function clearContent(){
    document.body.textContent = '';
}

function addGameContent(){
    const gameContainer = document.createElement('div');
    const gameTitle = document.createElement('div');
    const gameContent = document.createElement('div');

    gameContainer.classList.add('gameContainer');
    gameTitle.classList.add('gameTitle');
    gameContent.classList.add('gameContent');

    document.body.appendChild(gameContainer);
    gameContainer.appendChild(gameTitle);
    gameContainer.appendChild(gameContent);

    gameTitle.innerText = "Round-"

    const roundCounter = document.createElement('span');
    roundCounter.innerText = "1";
    gameTitle.appendChild(roundCounter);

    const humanScoreLabel = document.createElement('span');
    const humanScoreValue = document.createElement('span');
    const computerScoreLabel = document.createElement('span');
    const computerScoreValue = document.createElement('span');

    humanScoreLabel.innerText = "Human: ";
    humanScoreValue.innerText = "0";
    computerScoreLabel.innerText = "Computer: ";
    computerScoreValue.innerText = "0";
    
    gameTitle.appendChild(humanScoreLabel);
    gameTitle.appendChild(humanScoreValue);
    gameTitle.appendChild(computerScoreLabel);
    gameTitle.appendChild(computerScoreValue);

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');

    rockButton.innerText = "Rock";
    paperButton.innerText = "Paper";
    scissorsButton.innerText = "Scissors";

    gameContent.appendChild(rockButton);
    gameContent.appendChild(paperButton);
    gameContent.appendChild(scissorsButton);
}

const winField = document.querySelector('#inputWins');
const buttonStart = document.querySelector('#startButton');

buttonStart.addEventListener('click', () => {
    winGoals = +winField.value;
    clearContent();
    addGameContent();
});

// playGame();

