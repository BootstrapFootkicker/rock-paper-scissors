function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    return choices[randomVal];
}


