import { AnyAction, Reducer } from 'redux';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction {
  type: 'ADD_TODO';
  id: number;
  text: string;
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction;

function todo(state: Todo | null, action: TodoAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      const toggleState = state as Todo;
      if (toggleState.id === action.id) {
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

export const todos = (state: Todo[] = [], action: TodoAction | AnyAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(null, action as AddTodoAction)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action as ToggleTodoAction));
    default:
      return state;
  }
};
