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

module.exports = getComputerChoice;
// test to see that the above function works as intended using
// console.log
// create a jest test to confirm it works as intended