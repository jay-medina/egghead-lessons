import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TodoAppState } from '../reducers';
import { Todo, TodoAction } from '../reducers/todoReducer';
import { toggleTodo } from './actions';
import TodoComponent from './Todo';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter((todo) => todo.completed);
    case 'active':
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const TodoList: React.SFC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <TodoComponent
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
);

export interface MatchParams {
  filter?: string;
}

const mapStateToProps = (state: TodoAppState, { match }: any) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || 'all'),
});

const mapDispatchToProps = (dispatch: (action: TodoAction) => void) => ({
  onTodoClick(id: number) {
    dispatch(toggleTodo(id));
  },
});

// const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

export default VisibleTodoList;
