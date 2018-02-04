import React from 'react';
import { Todo } from '..';
import TodoComponent from './Todo';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const Todo: React.SFC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoComponent key={todo.id} text={todo.text} completed={todo.completed} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default Todo;
