import { visibilityFilter } from './visibilityFilterReducer';
import { todos, Todo } from './todoReducer';
import { Action } from 'redux';

export interface TodoAppState {
  todos?: Todo[];
  visibilityFilter?: string;
}
export const todoApp = (state: TodoAppState = {}, action: Action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};
