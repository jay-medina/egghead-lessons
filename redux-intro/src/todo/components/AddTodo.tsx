import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { TodoAction } from '../reducers/todoReducer';
import { addTodo } from './actions';

const ENTER_KEY = 13;

export interface AddTodoProps {
  onClick: (text: string) => void;
}

export interface AddTodoContainerState {
  value: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoContainerState> {
  public state = {
    value: '',
  };

  public render() {
    return (
      <Fragment>
        <input onChange={this.onInputChange} onKeyUp={this.onKeyUp} value={this.state.value} />
        <button onClick={this.onButtonClick}>Add Todo</button>
      </Fragment>
    );
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  }

  private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === ENTER_KEY) {
      this.addTodoToList();
    }
  }

  private onButtonClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.addTodoToList();
  }

  private addTodoToList() {
    this.props.onClick(this.state.value);
    this.setState({ value: '' });
  }
}

const mapDispatchToProps = (dispatch: (action: TodoAction) => void) => ({
  onClick(text: string) {
    dispatch(addTodo(text));
  },
});

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
