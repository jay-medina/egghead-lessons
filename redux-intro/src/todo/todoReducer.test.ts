import { Todo, TodoAction, todos } from './todoReducer';

describe('adding a todo', () => {
  it('should add the todo to the state', () => {
    const stateBefore: Todo[] = [];
    const action: TodoAction = {
      id: 0,
      text: 'Learn Redux',
      type: 'ADD_TODO',
    };

    expect(todos(stateBefore, action)).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Learn Redux',
      },
    ]);
  });
});

describe('toggleTodo', () => {
  let stateBefore: Todo[];
  beforeEach(() => {
    stateBefore = [
      {
        completed: false,
        id: 0,
        text: 'Learn Redux',
      },
      {
        completed: false,
        id: 1,
        text: 'Learn Elm',
      },
    ];
  });
  it('should toggle the specified todo', () => {
    expect(todos(stateBefore, { type: 'TOGGLE_TODO', id: 1 })).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Learn Redux',
      },
      {
        completed: true,
        id: 1,
        text: 'Learn Elm',
      },
    ]);
  });
});
