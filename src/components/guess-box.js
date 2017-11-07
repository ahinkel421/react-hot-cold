import React from 'react';
import GuessFeedback from './guess-feedback';
import Form from './form';
import UserGuesses from './user-guesses';

import './guess-box.css';

export default function GuessBox(props) {
	return (
		<section className='guessBoxSection'>
			<h1 className='header'>HOT or COLD</h1>
			<div className='guessBox'>
				<GuessFeedback feedback={props.feedback}/>
				<Form />
				<UserGuesses />
			</div>
		</section>
	);
}
