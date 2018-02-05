import React, { Fragment } from 'react';
import { Todo } from '..';
import { TodoAction } from '../todoReducer';
import { VisibilityFilterAction } from '../visibilityFilterReducer';
import './todo.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

export interface TodoAppProps {
  dispatch: (action: TodoAction | VisibilityFilterAction) => void;
  todos: Todo[];
  visibilityFilter: string;
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
    const { todos, visibilityFilter } = this.props;

    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo} inputVal={this.state.inputVal} onInputChange={this.onInputChange} />
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={this.onTodoItemClick} />
        <Footer onFilterClick={this.onFilterClick} visibilityFilter={visibilityFilter} />
      </Fragment>
    );
  }

  private onFilterClick = (filter: string) => {
    this.props.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
  }

  private onInputChange = (value: string) => {
    this.setState({ inputVal: value });
  };

  private addTodo = () => {
    this.props.dispatch({
      type: 'ADD_TODO',
      text: this.state.inputVal,
      id: this.getNextTodoId()
    });
    this.setState({ inputVal: '' });
  };

  private onTodoItemClick = (id: number) => {
    this.props.dispatch({
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
