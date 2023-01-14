// global variables
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const choicesArray = ['rock', 'paper', 'scissors'];

// score scount
let playerScore = 0;
let computerScore = 0;



// randomized computer choice from choices array
function getComputerChoice() {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
};


// prompts user for a choice of rock, paper, or scissors
function getPlayerChoice() {
    let input = prompt('Type rock, paper, or scissors');
    input = input.toLowerCase();
    return input;
};


// plays a single round of rps
function playRound(playerSelection, computerSelection) {

    // else if statements to compare user choice to computer selection and return winner or tie
     if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            return `Player wins the round! ${playerSelection} beats ${computerSelection}`
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
            return `Computer wins the round! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++
            return `Player wins the round! ${playerSelection} beats ${computerSelection}`
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            return `Computer wins the round! ${computerSelection} beats ${playerSelection}` 
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++
            return `Player wins the round! ${playerSelection} beats ${computerSelection}` 
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++
            return `Computer wins the round! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection == computerSelection) {
            return 'Tie!'
    };
};


// plays game once and declares a game winner
function game() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
    // displays overall winner
    if (playerScore > computerScore) {
        return 'Player wins the game!'
    } else if (playerScore < computerScore) {
        return 'Computer wins the game!'
    } else if (playerScore === computerScore) {
        return 'It\s a tie!'
    } 
};
