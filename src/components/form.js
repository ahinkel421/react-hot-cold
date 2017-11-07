import React from 'react';

import './form.css';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleGuess = this.handleGuess.bind(this);
	}
	handleGuess(event) {
		event.preventDefault();
		let guess = this.guessInput.value;
		this.props.handleGuess(guess);
		this.guessInput.value = '';
	}

	render(){
		return (
		<form className='form'>
			<input placeholder='Enter your Guess' ref={input => this.guessInput = input}/>
			<button onClick={this.handleGuess}>Guess</button>
			<span className='guessText'>Guess #
				<span className='guessText guessNumber'>{this.props.numberOfGuesses}</span>
			!</span>
		</form>
		);
	}
}