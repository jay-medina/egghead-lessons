import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter, Todo } from './todo';
import TodoApp from './todo/components/TodoApp';
import { Provider } from 'react-redux';

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter
});

const devtoolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore<TodoAppState>(todoReducer, devtoolExtension && devtoolExtension());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
