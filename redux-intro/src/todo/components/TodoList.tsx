import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '..';
import { TodoAppState } from '../..';
import { TodoAction } from '../todoReducer';
import { toggleTodo } from './actions';
import TodoComponent from './Todo';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    default:
      return todos.filter((todo) => !todo.completed);
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

const mapStateToProps = (state: TodoAppState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: (action: TodoAction) => void) => ({
  onTodoClick(id: number) {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
