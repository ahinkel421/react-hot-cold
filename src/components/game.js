import React from 'react';
import Navbar from './navbar';
import GuessBox from './guess-box';

export default function Game(props) {
	return (
		<div>
			<Navbar />
			<GuessBox />
		</div>
	);
}

//STATES:

//array of user guesses
//number you are trying to guess
//