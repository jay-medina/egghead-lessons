import React, { Fragment, SyntheticEvent, KeyboardEvent } from 'react';
import { Todo } from '..';
import { TodoAction } from '../todoReducer';
import './todo.css';
import FilterLink from './FilterLink';
import TodoList from './TodoList';

const ENTER_KEY = 13;

export interface TodoAppProps {
  dispatch: (action: TodoAction) => void;
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
        <input onChange={this.onInputChange} onKeyUp={this.onKeyUp} value={this.state.inputVal} />
        <button onClick={this.addTodo}>Add Todo</button>
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={this.onTodoItemClick} />
        <p>
          Show:{' '}
          <FilterLink filter="SHOW_ALL" dispatch={this.props.dispatch} currentFilter={this.props.visibilityFilter}>
            All
          </FilterLink>{' '}
          <FilterLink filter="SHOW_ACTIVE" dispatch={this.props.dispatch} currentFilter={this.props.visibilityFilter}>
            Active
          </FilterLink>{' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            dispatch={this.props.dispatch}
            currentFilter={this.props.visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </Fragment>
    );
  }

  private onKeyUp = (e: KeyboardEvent<any>) => {
    if (e.keyCode === ENTER_KEY) {
      this.addTodo();
    }
  };

  private onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputVal: e.currentTarget.value });
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
