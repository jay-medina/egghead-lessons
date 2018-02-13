import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider, Store } from 'react-redux';
import { Route, Router } from 'react-router';
import { TodoAppState } from '../reducers';
import TodoApp from './TodoApp';

export interface RootProps {
  store: Store<TodoAppState>;
}

const history = createBrowserHistory();

const Root: React.SFC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
