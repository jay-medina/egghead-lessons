import React from 'react';
import { Todo } from '..';
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

class VisibleTodoList extends React.Component {
  private unsubscribe = () => {};

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return <TodoList todos={getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={this.onTodoItemClick} />;
  }

  private onTodoItemClick = (id: number) => {
    const { store } = this.context;
    store.dispatch({
      id,
      type: 'TOGGLE_TODO'
    });
  };

  static contextTypes = {
    store: ''
  };
}

export default VisibleTodoList;
