import React, { Fragment } from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import './todo.css';
import TodoList from './TodoList';

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
