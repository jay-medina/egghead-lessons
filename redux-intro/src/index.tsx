import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter, Todo } from './todo';
import TodoApp from './todo/components/TodoApp';
import { Provider } from 'react-redux';
import { loadState, saveState } from './todo/util';

export interface StoreCreator {}

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter
});

const devtoolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const persistedState = loadState();

const store = createStore<TodoAppState>(todoReducer, persistedState, devtoolExtension && devtoolExtension());

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
