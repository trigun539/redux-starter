import React, { Component } from 'react';
import { render } from 'react-dom';

// TODO: create a container

// TODO: create a ticker component
class Ticker extends Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			number: 0
		};
	}

	render () {
		const { number } = this.state;

		return (
			<div>
				<h1>{ number }</h1>
				<button>Increment</button>
				<button>Decrement</button>
			</div>
		);
	}
}


// TODO: create a store

// TODO: create an action

// TODO: create a reducer

render(<Ticker />, document.getElementById('container'));
