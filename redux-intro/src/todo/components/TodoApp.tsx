import React, { Fragment, SyntheticEvent, KeyboardEvent } from 'react';
import { Todo } from '..';
import { TodoAction } from '../todoReducer';
import './todo.css';

const ENTER_KEY = 13;

export interface TodoAppProps {
  dispatch: (action: TodoAction) => void;
  todos?: Todo[];
}

let nextTodoId = 0;

class TodoApp extends React.Component<TodoAppProps> {
  state = {
    inputVal: ''
  };
  public render() {
    return (
      <Fragment>
        <input onChange={this.onInputChange} onKeyUp={this.onKeyUp} value={this.state.inputVal} />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>{this.renderTodos()}</ul>
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

  private renderTodos() {
    const { todos = [] } = this.props;

    return todos.map(todo => (
      <li key={todo.id} onClick={() => this.onTodoItemClick(todo)}>
        <span className={this.getTodoClassName(todo)}>{todo.text}</span>
      </li>
    ));
  }
  private getTodoClassName(todo: Todo) {
    return todo.completed ? 'todo__completed' : '';
  }
  private onTodoItemClick(todo: Todo) {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: todo.id
    });
  }
  private getNextTodoId() {
    const id = nextTodoId;
    nextTodoId += 1;
    return id;
  }
}

export default TodoApp;
