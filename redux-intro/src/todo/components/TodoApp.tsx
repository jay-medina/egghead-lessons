import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import AddTodo from './AddTodo';
import Footer from './Footer';
import './todo.css';
import TodoList from './TodoList';

export interface MatchParams {
  filter?: string;
}

class TodoApp extends React.Component<RouteComponentProps<MatchParams>> {
  public render() {
    const { params } = this.props.match;

    return (
      <Fragment>
        <AddTodo />
        <TodoList filter={params.filter || 'all'} />
        <Footer />
      </Fragment>
    );
  }
}

export default TodoApp;
