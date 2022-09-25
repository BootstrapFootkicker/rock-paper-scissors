function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    return choices[randomVal];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`Draw! You both chose ${playerSelection}`);
        return `Draw! You both chose ${playerSelection}`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

    }

}

for (let i = 0; i < 6; i++) {
    playRound('rock', getComputerChoice());
}