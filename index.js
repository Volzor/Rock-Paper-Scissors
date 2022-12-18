const choicesArray = ['Rock', 'Paper', 'Scissors'];

// function that chooses a random index from the choicesArray and logs the value of that index
const getComputerChoice = () => {
    const randomSelection = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return randomSelection;
};



// function that takes player choice and compares it to the random computer choice using else if statement
const playRound = (playerSelection, compSelection) => {
    if (playerSelection == 'Rock' && compSelection == 'Scissors') {
        return `Player wins! ${playerSelection} beats ${compSelection}`
    } else if (playerSelection == 'Scissors' && compSelection == 'Rock') {
        return `Computer wins! ${compSelection} beats ${playerSelection}`
    } else if (playerSelection == 'Paper' && compSelection == 'Rock') {
        return `Player wins! ${playerSelection} beats ${compSelection}`
    } else if (playerSelection == 'Rock' && compSelection == 'Paper') {
        return `Computer wins! ${compSelection} beats ${playerSelection}` 
    } else if (playerSelection == 'Scissors' && compSelection == 'Paper') {
        return `Player wins! ${playerSelection} beats ${compSelection}` 
    } else if (playerSelection == 'Paper' && compSelection == 'Scissors') {
        return `Computer wins! ${compSelection} beats ${playerSelection}`
     } else if (playerSelection == compSelection) {
        return 'Tie!'
    };
};

// assign user and computer choices to a variable
const compSelection = getComputerChoice();
const playerSelection = 'Rock';


// creates a for loop to make rounds which will be logged to the console
const game = () => {
    console.log('5 rounds of fun begin now!')
    for (let i = 0; i < 5; i++) {
        const playerSelection = 'Rock';
        const compSelection = getComputerChoice();
        console.log(playRound(playerSelection, compSelection));
    }
};
game();


