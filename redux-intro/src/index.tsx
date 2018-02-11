import { throttle } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Todo, todos, visibilityFilter } from './todo';
import TodoApp from './todo/components/TodoApp';
import { loadState, saveState } from './todo/util';

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter,
});

const devtoolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const persistedState = loadState();

const store = createStore<TodoAppState>(
  todoReducer,
  persistedState,
  devtoolExtension && devtoolExtension(),
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
