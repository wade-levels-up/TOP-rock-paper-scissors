// log Hello World to the console to ensure js file is properly linked.

// Create a function called getComputerChoice
// generate a random number between 1 and 3, included 1 and 3
// Fill out the function so that it randomly returns 'rock' 'paper
// or 'scissors'.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        console.log('rock');
        return 'rock';
    } else if (randomNumber === 2) {
        console.log('paper');
        return 'paper';
    } else {
        console.log('scissors');
        return 'scissors';
    }
}

getComputerChoice();

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
            console.log("human chose " + choice);
            validChoice = true;
        } else {
            alert("Invalid choice. Please choose again");
        }
    }

    return choice;
    
}

console.log(getHumanChoice());


if (typeof module === 'object') {
    module.exports = getComputerChoice;
    module.exports = getHumanChoice;
}