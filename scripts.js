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



function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = curHumanChoice.toLowerCase();

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

function checkGame() { 
    let winMessage;
    if (humanScore > computerScore){
        winMessage = `You win! ${humanScore}:${computerScore}`;
    }
    else if (humanScore < computerScore){
        winMessage = `You lose! ${humanScore}:${computerScore}`;
    }
    else{
        winMessage = `Draw! ${humanScore}:${computerScore}`;
    }

    if(humanScore === winGoals || computerScore === winGoals){
        const finishGame = document.createElement('div');
        finishGame.innerText = "Game Finished!" +" " + winMessage
        const gameContent = document.querySelector('.gameContent');
        gameContent.appendChild(finishGame);
        return true;
    }
    return false;
}

let humanScoreValue1;
let computerScoreValue1;
let tieCounter1;
let roundCounter1;

function initializeCounters(){
    humanScoreValue1 = document.querySelector('#humanScoreValue');
    computerScoreValue1 = document.querySelector('#computerScoreValue');
    tieCounter1 = document.querySelector('#tieCounter');
    roundCounter1 = document.querySelector('#roundCounter')
}

function updateScore(){
    humanScoreValue1.innerText = humanScore;
    computerScoreValue1.innerText = computerScore;
    tieCounter1.innerText = tieScore;
    roundCounter1.innerText = roundPlayed;
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundPlayed = 0;
let winGoals = 0;
let curHumanChoice = 'nothing';

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
    roundCounter.innerText = "0";
    roundCounter.id = "roundCounter";
    gameTitle.appendChild(roundCounter);

    const humanScoreLabel = document.createElement('span');
    const humanScoreValue = document.createElement('span');
    humanScoreValue.id = 'humanScoreValue';
    const computerScoreLabel = document.createElement('span');
    const computerScoreValue = document.createElement('span');
    computerScoreValue.id = 'computerScoreValue';

    humanScoreLabel.innerText = "Human: ";
    humanScoreValue.innerText = "0";
    computerScoreLabel.innerText = "Computer: ";
    computerScoreValue.innerText = "0";
    
    gameTitle.appendChild(humanScoreLabel);
    gameTitle.appendChild(humanScoreValue);
    gameTitle.appendChild(computerScoreLabel);
    gameTitle.appendChild(computerScoreValue);

    const tieLabel = document.createElement('span');
    const tieCounter = document.createElement('span');

    tieLabel.innerText = 'Tie Count: ';
    tieCounter.innerText = '0';
    tieCounter.id = 'tieCounter';
    gameTitle.appendChild(tieLabel);
    gameTitle.appendChild(tieCounter);

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');

    rockButton.setAttribute("id", "rockButton");
    paperButton.setAttribute("id", "paperButton");
    scissorsButton.setAttribute("id", "scissorsButton");

    rockButton.classList.add("weaponButton");
    paperButton.classList.add("weaponButton");
    scissorsButton.classList.add("weaponButton");

    rockButton.innerText = "Rock";
    paperButton.innerText = "Paper";
    scissorsButton.innerText = "Scissors";

    rockButton.value = "rock";
    paperButton.value = "paper";
    scissorsButton.value = "scissors";

    gameContent.appendChild(rockButton);
    gameContent.appendChild(paperButton);
    gameContent.appendChild(scissorsButton);

    initializeCounters();

    let weaponButtons = document.querySelectorAll(".weaponButton");

    function playRound1(e) {
        curHumanChoice = e.target.value;
        console.log(curHumanChoice);
        playRound();
        updateScore();
        if(checkGame()){
            weaponButtons.forEach((e) => {
                e.removeEventListener('click', playRound1);
            })
        }
    }

    weaponButtons.forEach((e) => {
        e.addEventListener('click', playRound1);
    });
}

const winField = document.querySelector('#inputWins');
const buttonStart = document.querySelector('#startButton');

function isNumeric(value) {
    return /^\d+$/.test(value);
}

buttonStart.addEventListener('click', () => {
    if(isNumeric(winField.value) && (+winField.value > 0)){
        winGoals = +winField.value;
        clearContent();
        addGameContent();
    }    
});

// playGame();

buttonStart.addEventListener('click', () => {

});

buttonStart.addEventListener('click', (e) => {

});