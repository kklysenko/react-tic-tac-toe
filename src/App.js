import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsConstructorType, thisTypeAnnotation } from '@babel/types';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			squares : Array(9).fill(null),
			count : 0
		}
		this.winnerLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
	}

	isWinner = () => {
		let s = ( this.state.count % 2 === 0 ) ? 'X' : 'O';
		for (let i = 0; i < 8; i++) {
			let line = this.winnerLines[i];
			if ( this.state.squares[line[0]] == s && this.state.squares[line[1]] == s && this.state.squares[line[2]] == s ) {
				alert(s + ' win!');
				setTimeout(() => {
					this.setState({squares : Array(9).fill(null) });
					this.setState({count : 0 });
				}, 2000)
			}
		}
	}

	clickHandler = event => {
		let data = event.target.getAttribute('data');
		let currentSquare = this.state.squares;
		if ( currentSquare[data] == null ) {
			currentSquare[data] = this.state.count % 2 === 0 ? 'X' : 'O';
			this.setState({ count: this.state.count + 1 });
			this.setState({ squares: currentSquare });
		}

		this.isWinner();
	}

	render () {

		const squares = [];

		for (let i = 0; i < 9; i++) {
		squares.push(<div className="ttt-grid" onClick={this.clickHandler} data={i}>{this.state.squares[i]}</div>);
		}

		return (
			<div className="tic-tac-toe">
				{squares}
			</div>
		)
	}
}

export default App;
