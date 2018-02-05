import React, { Fragment } from 'react';
import { TodoAppState } from '../..';
import { Store } from 'redux';

const ENTER_KEY = 13;

export interface AddTodoProps {
  value: string;
  onInputChange: (value: string) => void;
  onClick: () => void;
}

export interface AddTodoContainerProps {
  store: Store<TodoAppState>;
}

export interface AddTodoContainerState {
  value: string;
}

const onKeyUp = (keyCode: number, addTodo: () => void) => {
  if (keyCode === ENTER_KEY) {
    addTodo();
  }
};

const AddTodo: React.SFC<AddTodoProps> = ({ onInputChange, onClick, value }) => (
  <Fragment>
    <input
      onChange={e => onInputChange(e.currentTarget.value)}
      onKeyUp={e => onKeyUp(e.keyCode, onClick)}
      value={value}
    />
    <button onClick={onClick}>Add Todo</button>
  </Fragment>
);

let nextTodoId = 0;

class AddTodoContainer extends React.Component<AddTodoContainerProps, AddTodoContainerState> {
  private unsubscribe = () => {};

  state = {
    value: ''
  };

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <AddTodo onInputChange={this.onInputChange} value={this.state.value} onClick={this.onClick} />;
  }

  private onClick = () => {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: this.state.value,
      id: this.getNextTodoId()
    });
    this.setState({ value: '' });
  };

  private onInputChange = (value: string) => {
    this.setState({ value });
  };

  private getNextTodoId() {
    const id = nextTodoId;
    nextTodoId += 1;
    return id;
  }
}

export default AddTodoContainer;
