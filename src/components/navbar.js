import React from 'react';

import './navbar.css';

export default function Navbar(props) {
	return (
		<nav>
			<h3 className='navbar moreInfo'>WHAT?</h3>
			<h3 className='navbar newGame'>+NEW GAME</h3>
		</nav>
	);
}