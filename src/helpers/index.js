// @method getLetterMatchCount
// @param {string} guessedWord - guessed word
// @param {string} secret word - secret word
// @returns {number} - number of letters matched between guessed words and secret word

export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(secretWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
};
