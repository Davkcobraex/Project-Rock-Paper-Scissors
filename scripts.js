function getComputerChoice(){
    const playsChoice = ["Rock","Paper","Scissors"];
    let randInt = Math.floor(Math.random() * playsChoice.length)
    return playsChoice[randInt];
}

function playRound(playerSelection, computerSelection){

}