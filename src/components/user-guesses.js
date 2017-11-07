import React from 'react';

import './user-guesses.css';

export default function UserGuesses(props) {
	return (
		<div className='userGuesses'>
			<ul className='guessList'>
				<li className='guess'>5</li>
				<li className='guess'>75</li>
				<li className='guess'>60</li>
				<li className='guess'>87</li>
			</ul>
		</div>
	);
}