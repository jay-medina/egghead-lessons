import React, { Fragment } from 'react';
import { Todo } from '..';
import { TodoAction } from '../todoReducer';

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
        <input onChange={this.onInputChange} value={this.state.inputVal} />
        <button onClick={this.onButtonClick}>Add Todo</button>
        <ul>{this.renderTodos()}</ul>
      </Fragment>
    );
  }

  private onInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputVal: e.currentTarget.value });
  };

  private onButtonClick = () => {
    this.props.dispatch({
      type: 'ADD_TODO',
      text: this.state.inputVal,
      id: this.getNextTodoId()
    });
    this.setState({ inputVal: '' });
  };

  private renderTodos() {
    const { todos = [] } = this.props;

    return todos.map(todo => <li key={todo.id}>{todo.text}</li>);
  }
  private getNextTodoId() {
    const id = nextTodoId;
    nextTodoId += 1;
    return id;
  }
}

export default TodoApp;
