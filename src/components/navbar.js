import React from 'react';

import './navbar.css';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleNewGame = this.handleNewGame.bind(this);
	}
	//Can't get this to work
	handleNewGame() {
		if (this.props.handleNewGame) {
			this.props.handleNewGame();
		}
	}

	render() {
		return (
		<nav>
			<h3 className='navbar moreInfo'>WHAT?</h3>
			<h3 className='navbar newGame' onClick={this.handleNewGame}>+NEW GAME</h3>
		</nav>
		);
	}
	
}