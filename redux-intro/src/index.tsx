import React from 'react';
import ReactDOM from 'react-dom';
import Root from './todo/components/Root';
import configureStore from './todo/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
