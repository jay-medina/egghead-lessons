import { v4 } from 'node-uuid';

export const addTodo = (text: string) => ({
  id: v4(),
  text,
  type: 'ADD_TODO',
});

export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO',
});
