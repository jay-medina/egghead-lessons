import React from 'react';
import { Provider, Store } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoAppState } from '../reducers';
import TodoApp from './TodoApp';

export interface RootProps {
  store: Store<TodoAppState>;
}

const Root: React.SFC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
