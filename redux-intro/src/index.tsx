import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './counter/configureStore';
import CounterList from './counter/list';

const store = configureStore();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <CounterList />
    </Provider>,
    document.getElementById('root'),
  );
}

render();

store.subscribe(render);
