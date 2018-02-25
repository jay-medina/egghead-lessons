import React from 'react';
import { Provider, Store } from 'react-redux';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoAppState } from '../reducers';
import TodoApp from './TodoApp';

export interface RootProps {
  store: Store<TodoAppState>;
}

const Root: React.SFC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={TodoApp} />
        <Route path="/:filter" component={TodoApp} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
