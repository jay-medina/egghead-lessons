import React from 'react';

export interface TodoProps {
  text: string;
  completed: boolean | undefined;
  onClick: () => void;
}

function getTodoClassName(completed?: boolean) {
  return completed ? 'todo todo__completed' : 'todo';
}

const Todo: React.StatelessComponent<TodoProps> = ({ text, completed, onClick }) => (
  <li onClick={onClick}>
    <span className={getTodoClassName(completed)}>{text}</span>
  </li>
);

export default Todo;
