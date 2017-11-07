import React from 'react';

import './user-guesses.css';

export default function UserGuesses(props) {
	let listItems = props.guesses.map((guess, i) => {
		return <li className='guess' key={i}>{guess}</li>
	});

	return (
		<div className='userGuesses'>
			<ul className='guessList'>{listItems}</ul>
		</div>
	);
}