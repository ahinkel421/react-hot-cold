import React from 'react';
import GuessFeedback from './guess-feedback';
import Form from './form';
import UserGuesses from './user-guesses';

export default function GuessBox(props) {
	return (
		<div>
			<GuessFeedback />
			<Form />
			<UserGuesses />
		</div>
	);
}
