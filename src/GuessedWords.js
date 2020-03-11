import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents
    if(props.GuessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
            Try to guess the secret word!
            </span>
        )
    } else {
        const GuessedWordsRows = props.GuessedWords.map((word,index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="GuessedWords">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        { GuessedWordsRows }
                    </tbody>
                </table>
            </div>
        );
    }
    return(
        <div data-test="component-guessed-words">
            { contents }
        </div >
    );
};

GuessedWords.propTypes = {
    GuessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default GuessedWords;
