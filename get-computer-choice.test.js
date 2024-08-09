const getComputerChoice = require('./script');

test('generates random number between 1 and 3', () => {
    expect([1, 2, 3]).toContain(getComputerChoice());
});