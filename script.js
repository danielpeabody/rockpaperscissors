

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

// player choice 
function playerChoice(){
    const input = prompt();
    console.log(input);
}

