import { v4 } from 'node-uuid';
import { VisibilityFilterAction } from '../reducers/visibilityFilterReducer';

export const setVisibilityFilter = (filter: string): VisibilityFilterAction => ({
  filter,
  type: 'SET_VISIBILITY_FILTER',
});

export const addTodo = (text: string) => ({
  id: v4(),
  text,
  type: 'ADD_TODO',
});

export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO',
});
