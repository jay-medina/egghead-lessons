import { toggleTodo, todos, Todo, TodoAction } from './todoReducer';

describe('toggleTodo', () => {
  it('should toggle the todo item to completed', () => {
    const todoBefore = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };

    const todoAfter = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    };

    expect(toggleTodo(todoBefore)).toEqual(todoAfter);
  });
});

describe('todos', () => {
  describe('adding a todo', () => {
    it('should add the todo to the state', () => {
      const stateBefore: Todo[] = [];
      const action: TodoAction = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
      };

      expect(todos(stateBefore, action)).toEqual([
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ]);
    });
  });
});
