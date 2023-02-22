const playsChoice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * playsChoice.length)
    return playsChoice[randInt];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection){
        return "Tie Game!"
    }
    else if (
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper")
            ){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));