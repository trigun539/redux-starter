import React, { Component }             from 'react';
import { render }                       from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect }            from 'react-redux';

// ********* COMPONENT **********
class Ticker extends Component {
	render () {
		const { number, increment, decrement } = this.props;

		return (
			<div>
				<h1>{ number }</h1>
				<button onClick={ () => { increment(); }}>Increment</button>
				<button onClick={ () => { decrement(); }}>Decrement</button>
			</div>
		);
	}
}

class App extends Component {
	render () {
		return (
			<div>
				<TickerContainer />
				<TickerContainer />
				<Ticker 
					number={ 10 } 
					increment={ () => { console.log('pushed increment'); }}
					decrement={ () => { console.log('pushed decrement'); }}
					/>
			</div>
		);
	}
}

// ACTION CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// ACTION CREATORS
const increment = () => {
	return { type: INCREMENT };
};

const decrement = () => {
	return { type: DECREMENT };
};

// ********** THE CONTAINER *******************

class TickerWrapper extends Component {
	render () {
		const { firstNumber, increment, decrement } = this.props;

		return (
			<Ticker 
				number={ firstNumber } 
				increment={ increment } 
				decrement={ decrement } />
		);
	}
}

// ************ SPECIAL FUNCTIONS ****************
const mapToState = (state) => {
	return { firstNumber: state.firstNumber };
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment () { dispatch(increment()); },
		decrement () { dispatch(decrement()); }
	};
}

// ************ SPECIAL FUNCTIONS ****************
const TickerContainer = connect(mapToState, mapDispatchToProps)(TickerWrapper);

// ********** THE CONTAINER *******************

// ********** THE REDUCER ***************

const firstNumber = (state = 5, action) => {
	switch (action.type) {
		case INCREMENT: 
			return ++state;
		case DECREMENT:
			return --state;
		default:
			return state;
	}
}

const allReducers = combineReducers({
	firstNumber
});

// *************** STORE ******************

let store = createStore(allReducers);

window.store = store;

render(
	<Provider store={ store }>
		<App />
	</Provider>
, document.getElementById('container'));




