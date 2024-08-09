const getComputerChoice = require('./script');
const playRound = require('./script');

test('returns rock paper or scissors', () => {
    expect(['rock', 'paper', 'scissors']).toContain(getComputerChoice());
});
