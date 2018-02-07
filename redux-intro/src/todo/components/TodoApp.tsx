import React, { Fragment } from 'react';
import './todo.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

class TodoApp extends React.Component {
  public render() {
    return (
      <Fragment>
        <AddTodo />
        <TodoList />
        <Footer />
      </Fragment>
    );
  }
}

export default TodoApp;
