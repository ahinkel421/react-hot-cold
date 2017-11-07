import React from 'react';

import './navbar.css';

export default class Navbar extends React.Component {

	//Can't get this to work
	handleNewGame(event) {
		event.preventDefault();
		if (this.props.onNewGame) {
			this.props.onNewGame();
		}
	}

	render() {
		return (
		<nav>
			<h3 className='navbar moreInfo'>WHAT?</h3>
			<h3 className='navbar newGame' onClick={e => this.handleNewGame}>+NEW GAME</h3>
		</nav>
		);
	}
	
}