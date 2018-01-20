import { todos, Todo, TodoAction } from './todoReducer';

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

  describe('toggleTodo', () => {
    let stateBefore: Todo[];
    beforeEach(() => {
      stateBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
        {
          id: 1,
          text: 'Learn Elm',
          completed: false,
        }
      ];
    });
    it('should toggle the specified todo', () => {
      expect(
        todos(stateBefore, { type: 'TOGGLE_TODO', id: 1})
      ).toEqual([
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
        {
          id: 1,
          text: 'Learn Elm',
          completed: true,
        }
      ])
    });
  });
