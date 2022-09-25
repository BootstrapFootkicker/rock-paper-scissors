let score = 0

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    return choices[randomVal];
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`Draw! You both chose ${playerSelection}`);
        return `Draw! You both chose ${playerSelection}`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }

    } else {
        console.log(`${playerSelection} is an invalid input`);

    }

}

function game() {
    let playerChoice = prompt("Rock, Paper, or Scissors?")
    for (let i = 0; i <= 4; i++) {
        playRound(playerChoice.toLowerCase(), getComputerChoice());
        if (playRound() === "W") {
            score += 0;
        }
    }
    if (score >= 3) {
        console.log(`You win the game! You have ${score} wins and ${5 - score} losses!`)
    } else {
        console.log(`You Lose the game! You have ${score} wins and ${5 - score} losses!`)
    }

}


game();
