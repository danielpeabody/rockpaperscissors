let PLAYERSCORE = 0;
let CPUSCORE = 0;

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
    let choice = document.getElementById('computerChoice')
    let randomNum = randomNumber();
    switch(randomNum) {
        case 1:
            choice.innerText = "The Computer Chose Rock";
            return "rock"
            break;
        case 2:
            choice.innerText = "The Computer Chose Paper";
            return "paper"
            break;
        default:
            choice.innerText = "The Computer Chose Scissors";
            return "scissors"

    }
}

function determineWinner(player,cpu){
    if(player === "rock"){
        if(cpu === "rock")
        return "tie"
        
        else if(cpu === "paper")
        return "lose"
        
        else
        return "win"
    }

    if(player === "paper"){
        if(cpu === "paper")
        return "tie"
        
        else if(cpu === "scissors")
        return "lose"
        
        else
        return "win"
    }

    if(player === "scissors"){
        if(cpu === "scissors")
        return "tie"
        
        else if(cpu === "rock")
        return "lose"
        
        else
        return "win"
    }
}

function updateGameState(outcome){
    if(outcome === "win"){
        PLAYERSCORE += 1;   
        const player = document.getElementById('playerscore');
        player.textContent = `Player : ${PLAYERSCORE}`;
    }
    else if(outcome === "lose"){
        CPUSCORE += 1;
        const cpu = document.getElementById('cpuscore');
        cpu.textContent = `Cpu : ${CPUSCORE}`;
    }
}

// rock is chosen by player
const rockButton = document.querySelector('.choice.rock');
rockButton.addEventListener('click',function(){
    const cpu = getComputerChoice();
    const outcome = determineWinner("rock",cpu);
    updateGameState(outcome)
})

const paperButton = document.querySelector('.choice.paper');
paperButton.addEventListener('click',function(){
    const cpu = getComputerChoice();
    const outcome = determineWinner("paper",cpu);
    updateGameState(outcome)
})

const scissorsButton = document.querySelector('.choice.scissors');
scissorsButton.addEventListener('click',function(){
    const cpu = getComputerChoice();
    const outcome = determineWinner("scissors",cpu);
    updateGameState(outcome)
})