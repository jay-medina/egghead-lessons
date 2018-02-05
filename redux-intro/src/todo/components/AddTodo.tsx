import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ENTER_KEY = 13;
let nextTodoId = 0;

export interface AddTodoProps {
  onClick: (text: string) => void;
}

export interface AddTodoContainerState {
  value: string;
}

function getNextTodoId() {
  const id = nextTodoId;
  nextTodoId += 1;
  return id;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoContainerState> {
  state = {
    value: ''
  };

  render() {
    return (
      <Fragment>
        <input onChange={this.onInputChange} onKeyUp={this.onKeyUp} value={this.state.value} />
        <button onClick={this.onButtonClick}>Add Todo</button>
      </Fragment>
    );
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === ENTER_KEY) {
      this.addTodoToList();
    }
  };

  private onButtonClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.addTodoToList();
  };

  private addTodoToList() {
    this.props.onClick(this.state.value);
    this.setState({ value: '' });
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: (text: string) => {
      dispatch({
        text,
        type: 'ADD_TODO',
        id: getNextTodoId()
      });
    }
  };
};

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
