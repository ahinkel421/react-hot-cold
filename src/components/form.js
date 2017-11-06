import React from 'react';

export default function Form(props) {
	return (
		<form>
			<input placeholder='Enter your Guess' />
			<button>Guess</button>
			<span>Guess #</span><span>1</span>
		</form>
	);
}