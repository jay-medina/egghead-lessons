import { combineReducers } from 'redux';
import { Todo, todos } from './todoReducer';

export interface TodoAppState {
  todos: Todo[];
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
});

export default todoReducer;
