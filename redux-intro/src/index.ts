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
  document.body.innerText = '' + store.getState();
};

store.subscribe(() => {
  render();
});

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

render();
