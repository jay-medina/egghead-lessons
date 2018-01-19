import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createStore } from 'redux';
import counterReducer from './counter/reducer';
import Counter from './counter';

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <Counter
      state={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
