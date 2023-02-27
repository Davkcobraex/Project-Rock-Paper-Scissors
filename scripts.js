const playsChoice = ["rock","paper","scissors"];
let wins = 0;
let losts = 0;
const content = document.querySelector('#content');
const message = document.createElement('div');




function getComputerChoice(){
    let randInt = Math.floor(Math.random() * playsChoice.length)
    return playsChoice[randInt];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection){
        message.textContent = "Tie Game!";
        return content.appendChild(message);
    }
    else if (
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper")
            ){
        losts += 1;
        message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return content.appendChild(message);
    }
    else {
        wins += 1;
        message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return content.appendChild(message);
    }
}

function game(){
    console.log(wins + losts);
    if (wins > losts && wins + losts == 5){
        message.textContent = "You Win!";
        return content.appendChild(message);


    }
    else if (wins < losts && wins + losts == 5){
        message.textContent = "You Lost!";
        return content.appendChild(message);
    }

}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value,getComputerChoice());
        game();
      });
});



//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));