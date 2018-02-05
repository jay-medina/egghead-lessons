import React from 'react';
import { Todo } from '..';
import TodoComponent from './Todo';
import { TodoAppState } from '../..';
import { Store } from 'redux';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

export interface VisibleTodoListProps {
  store: Store<TodoAppState>;
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

class VisibleTodoList extends React.Component<VisibleTodoListProps> {
  private unsubscribe = () => {};

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.props.store.getState();
    return <TodoList todos={getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={this.onTodoItemClick} />;
  }

  private onTodoItemClick = (id: number) => {
    this.props.store.dispatch({
      id,
      type: 'TOGGLE_TODO'
    });
  };
}

export default VisibleTodoList;
