import React from 'react';
import { Todo } from '..';
import TodoComponent from './Todo';
import { TodoAppState } from '../..';
import { TodoAction } from '../todoReducer';
import { connect } from 'react-redux';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      return todos.filter(todo => !todo.completed);
  }
};

const TodoList: React.SFC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoComponent key={todo.id} text={todo.text} completed={todo.completed} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = (state: TodoAppState) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch: (action: TodoAction) => void) => {
  return {
    onTodoClick: (id: number) => {
      dispatch({
        id,
        type: 'TOGGLE_TODO'
      });
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
