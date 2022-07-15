

// creates a random number between
// 0 and 3
function randomNumber() {
    let x = Math.floor(Math.random() * 10);

    switch(x) {
        case 0:
        case 1:
        case 2:
            return 1;
            break;
        case 4:
        case 5:
        case 6:
            return 2;
            break;
        default: 
        return 3;
    }
}


// chooses rock,paper, or scissors randomly
function getComputerChoice(){
    let randomNum = randomNumber();
    switch(randomNum) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"

    }
}


function playerChoice(){
    let choice = prompt();
    return choice
}

function playRound(playerselection,computerSelection){
    if(playerselection == "rock"){
        if(computerSelection == "paper"){
            return "You lose paper beats rock."
        }
        else if (computerSelection == "scissors"){
            return "You win rock beats scissors."
        }
        else{
            return "Tie!"
        }
    }
    else if(playerselection == "paper"){
        if(computerSelection == "rock"){
            return "You win paper beats rock."
        }
        else if (computerSelection == "scissors"){
            return "You lose rock beats scissors."
        }
        else{
            return "Tie!"
        }
    }
    else {
        if(computerSelection == "rock"){
            return "You lose rock beats scissors."
        }
        else if (computerSelection == "scissors"){
            return "You win rock beats scissors."
        }
        else{
            return "Tie!"
        }
    }
}


function playGame(rounds){
    let playerCount = 0;
    let cpuCount = 0;
    for(let i = 0; i < rounds; i++){
        let result = playRound(playerChoice(),getComputerChoice());
        result = result.split(' ');
       
       if(result[0] == 'tie'){
        playerCount += 0;
       }else if(result[1] == 'win'){
        playerCount += 1;
       }else {
        cpuCount += 1;
       }
    }
    if(playerCount > cpuCount){
        return `player : ${playerCount} cpu: ${cpuCount} YOU WIN!`
    }else {
        return `player : ${playerCount} cpu: ${cpuCount} YOU LOSE!`

    }
}

console.log(playGame(3))

