import React from 'react';
import Navbar from './navbar';
import GuessBox from './guess-box';

import './game.css';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userGuesses: [],
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			feedback: 'Make your Guess!'
		}
		this.handleNewGame = this.handleNewGame.bind(this);
		this.handleGuess = this.handleGuess.bind(this);
	}

	handleNewGame() {
		this.setState({
			userGuesses: [],
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			feedback: 'Make your Guess!' 
		});
	}

	handleGuess(guess) {
		let userGuessesCopy = this.state.userGuesses.slice();
		userGuessesCopy.push(guess);
		this.setState({
			userGuesses: userGuessesCopy
		});

		guess = parseInt(guess, 10);
		let difference = Math.abs(this.state.correctAnswer - guess);

		let feedback;

		if (isNaN(guess)) {
			feedback = "You didn't even guess anything..."
		}

		else if (difference >= 70) {
			feedback = "You could not be more freezing..."
		}
		else if (difference >= 50) {
			feedback = "You're freezing";
		}
		else if (difference >= 30) {
			feedback = "You're cold";
		}
		else if (difference >= 15) {
			feedback = "You're kind of warm...";
		}
		else if (difference >= 10) {
			feedback = "You're warm";
		}
		else if (difference >= 5) {
			feedback = "You're hot!"
		}
		else if (difference >= 2) {
			feedback = "YOU'RE ON FIRE!!!"
		}
		else if (difference === 1) {
			feedback = "IT BURNS!!!"
		}
		else {
			feedback = "Jackpot!!! You win! Please click \"New Game\" to play again."
		}

		this.setState({
			feedback
		});		
	}

	render() {
		return (
		<div className='gameBody'>
			<Navbar handleNewGame={this.handleNewGame}/>
			<GuessBox feedback={this.state.feedback} guesses={this.state.userGuesses} handleGuess={this.handleGuess} />
		</div>
		);
	}
}

//STATES:

//array of user guesses
//number you are trying to guess
// Make a guess vs. hot/cold/warm etc.

//Complete: 
//1. added function stubs
//2. feedback now reflects state
//3. Added CSS files
//4. Their guess should be appended to the user-guesses section (state of userGuesses should be updated).
//5. //When new game gets clicked:
			//1. State gets reset to default state.
			//2. Current guess # gets reset.
//6. The difference between their guess, and the correct answer should be determined.
//7. If the difference is less than 10, return hot, less than 20, return warm, ect.
//8. Render that feedback to 'guess-feedback.js.'
//9. If user's guess === correct answer, update state.feedback to "you win! etc."

