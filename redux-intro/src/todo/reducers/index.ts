import { combineReducers } from 'redux';
import { Todo, todos } from './todoReducer';
import { visibilityFilter } from './visibilityFilterReducer';

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: string;
}

const todoReducer = combineReducers<TodoAppState>({
  todos,
  visibilityFilter,
});

export default todoReducer;
