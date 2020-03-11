import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
    //method: constructor
    //param: {object} props
    // returns: {undefined}

    constructor(props) {
        super(props);

        //initialize setState
        this.state = { currentGuess: null }

        //bind this for submitGuessedWord
        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }
    submitGuessedWord(evt) {
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;

        if(guessedWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord);
            this.setState({ currentGuess: '' })
        }
    }
    render() {
        const contents = this.props.success
        ? null //if it's false (it's passed as props as false), make it null
        : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    value={this.state.currentGuess}
                    onChange={(evt) => this.setState({ currentGuess: evt.tsrget.value })}
                    placeholder="enter guess"/>
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={() => {
                        this.props.guessWord('')
                    }}
                    type="submit">
                    submit
                </button>
            </form>
        )
        return(
         <div data-test="component-input">
        {contents}
        </div>

    )};
};

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);
