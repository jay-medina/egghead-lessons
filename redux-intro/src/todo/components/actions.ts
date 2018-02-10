import { VisibilityFilterAction } from '../visibilityFilterReducer';

export const setVisibilityFilter = (filter: string): VisibilityFilterAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

let nextTodoId = 0;

function getNextTodoId() {
  const id = nextTodoId;
  nextTodoId += 1;
  return id;
}

export const addTodo = (text: string) => ({
  text,
  type: 'ADD_TODO',
  id: getNextTodoId()
})

export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO'
})
