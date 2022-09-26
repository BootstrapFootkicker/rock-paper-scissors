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
        return "D";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            score += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            score += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "W";
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "L";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            score += 1;
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

    for (let i = 0; i <= 4; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?")
        let roundResults = playRound(playerChoice.toLowerCase(), getComputerChoice());

        if (roundResults === "D") {
            playerChoice = prompt("Rock, Paper, or Scissors?")
            roundResults = playRound(playerChoice.toLowerCase(), getComputerChoice());

        }

    }
    
    if (score >= 3) {
        console.log(`You win the game! You have ${score} wins and ${5 - score} losses!`)
    } else {
        console.log(`You Lose the game! You have ${score} wins and ${5 - score} losses!`)
    }

}


game();
