import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter, Todo } from './todo';

export interface TodoAppState {
  todos?: Todo[];
  visibilityFilter?: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter
});

const store = createStore(todoReducer);

const render = () => {
  ReactDOM.render(<div>hello</div>, document.getElementById('root'));
};

store.subscribe(render);

render();
