import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter, Todo } from './todo';
import TodoApp from './todo/components/TodoApp';
import { Store } from 'redux';

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

class Provider extends Component<{ store: Store<TodoAppState> }> {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
  static childContextTypes = {
    store: {}
  };
}

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
