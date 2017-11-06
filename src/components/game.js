import React from 'react';
import Navbar from './navbar';
import GuessBox from './guess-box';

import './game.css';

export default function Game(props) {
	return (
		<div className='gameBody'>
			<Navbar />
			<GuessBox />
		</div>
	);
}

//STATES:

//array of user guesses
//number you are trying to guess
//