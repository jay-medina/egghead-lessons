import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import counterReducer from './counter/reducer';

const store = createStore(counterReducer);

// gets the current state of the store
console.log(store.getState());

// dispatch - fires an action
store.dispatch({ type: 'INCREMENT' });

// updated state

console.log(store.getState());

// subscribes to changes
const render = () => {
  ReactDOM.render(<div>hello</div>, document.getElementById('root'));
};

store.subscribe(render);

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

render();
