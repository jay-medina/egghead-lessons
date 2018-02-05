import React, { Fragment } from 'react';
import { Todo } from '..';
import './todo.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import { TodoAppState } from '../..';
import { Store } from 'redux';

export interface TodoAppProps {
  store: Store<TodoAppState>;
}

let nextTodoId = 0;

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

class TodoApp extends React.Component<TodoAppProps> {
  state = {
    inputVal: ''
  };
  public render() {
    const { store } = this.props;
    const { todos, visibilityFilter } = store.getState();

    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo} inputVal={this.state.inputVal} onInputChange={this.onInputChange} />
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={this.onTodoItemClick} />
        <Footer store={store} />
      </Fragment>
    );
  }

  private onInputChange = (value: string) => {
    this.setState({ inputVal: value });
  };

  private addTodo = () => {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: this.state.inputVal,
      id: this.getNextTodoId()
    });
    this.setState({ inputVal: '' });
  };

  private onTodoItemClick = (id: number) => {
    this.props.store.dispatch({
      id,
      type: 'TOGGLE_TODO'
    });
  };

  private getNextTodoId() {
    const id = nextTodoId;
    nextTodoId += 1;
    return id;
  }
}

export default TodoApp;
