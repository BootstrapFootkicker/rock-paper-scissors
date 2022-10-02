const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-wins');
const computerScore = document.querySelector('#computer-wins');
let playersWins = 0;
let computerWins = 0;


function refreshScore() {
    playerScore.innerHTML = `Player Wins = ${playersWins}`;
    computerScore.innerHTML = `Computer Wins = ${computerWins}`;
    if (playersWins === 5) {
        alert("Player Wins!");
    }
    if (computerWins === 5) {
        alert("Computer Wins!");
    }
}

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    return choices[randomVal];
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        results.textContent = `Draw! You both chose ${playerSelection}`
        console.log(`Draw! You both chose ${playerSelection}`);
        return "D";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playersWins += 1;
            refreshScore();
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            computerWins += 1;
            refreshScore();
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playersWins += 1;
            refreshScore();
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            computerWins += 1;
            refreshScore();
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playersWins += 1;
            refreshScore();
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            computerWins += 1;
            refreshScore();
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }

    } else {

        console.log(`${playerSelection} is an invalid input`);

    }

}


rockBtn.addEventListener('click', (event) => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', (event) => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', (event) => playRound('scissors', getComputerChoice()));