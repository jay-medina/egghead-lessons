import React, { Fragment } from 'react';
import './todo.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import { TodoAppState } from '../..';
import { Store } from 'redux';

export interface TodoAppProps {
  store: Store<TodoAppState>;
}

class TodoApp extends React.Component<TodoAppProps> {

  public render() {
    const { store } = this.props;

    return (
      <Fragment>
        <AddTodo store={store} />
        <TodoList store={store} />
        <Footer store={store} />
      </Fragment>
    );
  }
}

export default TodoApp;
