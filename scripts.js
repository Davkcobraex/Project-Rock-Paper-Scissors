const playsChoice = ["rock","paper","scissors"];
let wins = 0;
let losts = 0;



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
        losts += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        wins += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

function game(){
    for (let i = 0; i < 1; i++) {
        //let sign = window.prompt("What is your play?");
        //console.log(playRound(sign, getComputerChoice()));
    }
    if (wins > losts){
        console.log("you win!");
    }
    else {
        console.log("you lost");
    }
}
//game();

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let x = document.getElementById("btn").value;
    console.log(x)
    //console.log(playRound(x,getComputerChoice()));

  });


//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));