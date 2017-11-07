import React from 'react';

import './form.css';

export default function Form(props) {
	return (
		<form className='form'>
			<input placeholder='Enter your Guess' />
			<button>Guess</button>
			<span className='guessText'>Guess #
				<span className='guessText guessNumber'>1</span>
			!</span>
		</form>
	);
}