export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoAction {
  type: string;
  id: number;
  text: string;
}

export const toggleTodo = (todo: Todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

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
    default:
      return state;
  }
};
