const choicesArray = ['rock', 'paper', 'scissors'];

// function that chooses a random index from the choicesArray and logs the value of that index
const getComputerChoice = () => {
    const randomSelection = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return randomSelection;
};

const playerChoice = () => {
    let input = prompt('Type rock, paper, or scissors');
    return input;
}; 

let playerWins = 0;
let computerWins = 0;

// function that takes player choice and compares it to the random computer choice using else if statement (can be refactored)
const checkWinner = (playerSelection, compSelection) => {
    if (playerSelection == 'rock' && compSelection == 'scissors') {
        playerWins++
        return `Player wins! ${playerSelection} beats ${compSelection}`
    } else if (playerSelection == 'scissors' && compSelection == 'rock') {
        computerWins++
        return `Computer wins! ${compSelection} beats ${playerSelection}`
    } else if (playerSelection == 'paper' && compSelection == 'rock') {
        playerWins++
        return `Player wins! ${playerSelection} beats ${compSelection}`
    } else if (playerSelection == 'rock' && compSelection == 'paper') {
        computerWins++
        return `Computer wins! ${compSelection} beats ${playerSelection}` 
    } else if (playerSelection == 'scissors' && compSelection == 'paper') {
        playerWins++
        return `Player wins! ${playerSelection} beats ${compSelection}` 
    } else if (playerSelection == 'paper' && compSelection == 'scissors') {
        computerWins++
        return `Computer wins! ${compSelection} beats ${playerSelection}`
     } else if (playerSelection == compSelection) {
        return 'Tie!'
    };
};

// creates a for loop to make 5 rounds which will log the winner to the console
const game = () => {
    console.log('5 rounds of fun begin now!');
    let roundsWon = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const compSelection = getComputerChoice();
        let result = checkWinner(playerSelection, compSelection);
        console.log(result)
    };
     if (playerWins > computerWins) {
        console.log('PLAYER WINS!')
     } else {
        console.log('COMPUTER WINS!')
     }
}



