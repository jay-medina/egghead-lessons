import { AnyAction, Reducer } from 'redux';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction extends AnyAction {
  type: 'ADD_TODO';
  id: number;
  text: string;
}

interface ToggleTodoAction extends AnyAction {
  type: 'TOGGLE_TODO';
  id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | AnyAction;

export const todos = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        const toggleAction = action as ToggleTodoAction;
        if (todo.id === toggleAction.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
