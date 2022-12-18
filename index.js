const choicesArray = ['Rock', 'Paper', 'Scissors'];

// function that chooses a random index from the choicesArray and logs the value of that index
const getComputerChoice = () => {
    const randomSelection = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return randomSelection;
};



// function that takes player choice and compares it to the random computer choice using else if statement
const playGame = (playerSelection, compSelection) => {
    if (playerSelection == 'Rock' && compSelection == 'Scissors') {
        return 'Player wins!'
    } else if (playerSelection == 'Scissors' && compSelection == 'Rock') {
        return 'Computer wins!'
    } else if (playerSelection == 'Paper' && compSelection == 'Rock') {
        return 'Player wins!'
    } else if (playerSelection == 'Rock' && compSelection == 'Paper') {
        return 'Computer wins!' 
    } else if (playerSelection == 'Scissors' && compSelection == 'Paper') {
        return 'Player wins!' 
    } else if (playerSelection == 'Paper' && compSelection == 'Scissors') {
        return 'Computer wins!'
     } else if (playerSelection == compSelection) {
        return 'Tie!'
    }
};

// assign user and computer choices to a variable
const compChoice = getComputerChoice();
const playerChoice = 'Rock';

// log the results
console.log(playGame(playerChoice, compChoice))



