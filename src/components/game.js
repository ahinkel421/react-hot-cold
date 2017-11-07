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
	}

	handleNewGame() {
		//When new game gets clicked:
			//1. State gets reset to default state.
			//2. Current guess # gets reset.
			console.log("it is working");
	}

	handleGuess(event) {
	//When the user makes a guess:
		//1. Their guess should be appended to the user-guesses section (state of userGuesses should be updated).
		//2. Guess#++ (increases by one).
		//3. The difference between their guess, and the correct answer should be determined.
		//4. If the difference is less than 10, return hot, less than 20, return warm, ect.
		//5. Render that feedback to 'guess-feedback.js.'
		//6. If user's guess === correct answer, update state.feedback to "you win! etc."
	}

	render() {
		return (
		<div className='gameBody'>
			<Navbar onClick={this.handleNewGame}/>
			<GuessBox feedback={this.state.feedback}/>
		</div>
		);
	}
}

//STATES:

//array of user guesses
//number you are trying to guess
// Make a guess vs. hot/cold/warm etc.