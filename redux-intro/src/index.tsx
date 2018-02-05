import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter, Todo } from './todo';
import TodoApp from './todo/components/TodoApp';

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter
});

const devtoolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(todoReducer, devtoolExtension && devtoolExtension());

const render = () => {
  ReactDOM.render(<TodoApp dispatch={store.dispatch} {...store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);

render();
