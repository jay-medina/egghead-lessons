import { VisibilityFilterAction } from '../visibilityFilterReducer';

export const setVisibilityFilter = (filter: string): VisibilityFilterAction => ({
  filter,
  type: 'SET_VISIBILITY_FILTER',
});

let nextTodoId = 0;

function getNextTodoId() {
  const id = nextTodoId;
  nextTodoId += 1;
  return id;
}

export const addTodo = (text: string) => ({
  id: getNextTodoId(),
  text,
  type: 'ADD_TODO',
});

export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO',
});
