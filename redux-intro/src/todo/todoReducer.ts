import { Action } from 'redux';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  id: number;
  text: string;
}

interface ToggleTodoAction extends Action {
  type: 'TOGGLE_TODO';
  id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | Action;

function todo(state: Todo | null, action: TodoAction) {
  switch (action.type) {
    case 'ADD_TODO':
      const addAction = action as AddTodoAction;
      return {
        id: addAction.id,
        text: addAction.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      const toggleState = state as Todo;
      const toggleAction = action as ToggleTodoAction;
      if (toggleState.id === toggleAction.id) {
        return {
          ...toggleState,
          completed: !toggleState.completed
        };
      }
      return toggleState;
    default:
      return state as Todo;
  }
}

export const todos = (state: Todo[] = [], action: TodoAction | Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(null, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action as ToggleTodoAction));
    default:
      return state;
  }
};
