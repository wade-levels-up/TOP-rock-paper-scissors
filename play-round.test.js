const playRound = require('./script');

test('player inputs rock', () => {
    expect(playRound('rock','paper')).toBe("You lose! Paper beats Rock");
});