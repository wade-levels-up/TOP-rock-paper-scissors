// log Hello World to the console to ensure js file is properly linked.

// Create a variable named humanScore that holds a number, initialized at 0
let humanScore = 0;
// Create a variable named computerScore that holds a number, initialized at 0
let computerScore = 0;

// Create a function called getComputerChoice
// generate a random number between 1 and 3, included 1 and 3
// Fill out the function so that it randomly returns 'rock' 'paper
// or 'scissors'.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// test to see that the above function works as intended using
// console.log
// create a jest test to confirm it works as intended


// Create a function to get the user's choice
// Prompt user for an input and store the string in
// a variable named choice if the choice is a valid option
// Ensure that choice variable is all lowercase
// Have the function return choice

function getHumanChoice() {

    let choice = "";
    let validChoice = false;

    while (validChoice === false) {

        choice = prompt('Enter: rock, paper or scissors', "").toLowerCase();

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            validChoice = true;
        } else {
            alert("Invalid choice. Please choose again");
        }
    }

    return choice;
    
}

// Create a function named playRound
// Define two parameters - humanChoice and computerChoice
// Calculate who won the round based on the choices
// Log a message to console that communicates who won and why
// increment humanScore or computerScore depending who won

function playRound(computerChoice, humanChoice) {

    if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        return "You lose! Paper beats Rock";
    } else if (humanChoice === 'rock' && computerChoice === 'rock'){
        return "Draw!";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++
        return "You win! Rock beats Scissors";
        
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        return "Draw!";
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        return "You win! Paper beats Rock";
        
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        return "You lose! Scissors beats Paper";
        
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        return "You lose! Rock beats Scissors";
        
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        return "You win! Scissors beats Paper";
        
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return "Draw!";
    } else {
        return "error";
    }
}


// Create function named playGame that calls playRound 5 times
// At the end of 5 rounds it will declare who the winner was
// And output the scores

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(),getHumanChoice()));
    }
    if (humanScore > computerScore) {
        console.log(`With a total score of ${humanScore}. You beat the computer who scored ${computerScore}`);
    } else if (humanScore === computerScore) {
        console.log(`It's a draw. Your score is ${humanScore} and the computer's score is ${computerScore}`);
    } else {
        console.log(`The computer scored: ${computerScore} and you scored: ${humanScore}. You lose`);
    }
}

playGame();

if (typeof module === 'object') {
    module.exports = getComputerChoice;
    module.exports = getHumanChoice;
    module.exports = playRound;
}