import React from 'react';
import { Provider, Store } from 'react-redux';
import { TodoAppState } from '../reducers';
import TodoApp from './TodoApp';

export interface RootProps {
  store: Store<TodoAppState>;
}
const Root: React.SFC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default Root;
