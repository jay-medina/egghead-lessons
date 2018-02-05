import React, { Fragment } from 'react';

const ENTER_KEY = 13;

export interface AddTodoProps {
  inputVal: string;
  onInputChange: (value: string) => void;
  addTodo: () => void;
}

const onKeyUp = (keyCode: number, addTodo: () => void) => {
  if (keyCode === ENTER_KEY) {
    addTodo();
  }
};

const AddTodo: React.SFC<AddTodoProps> = ({ onInputChange, addTodo, inputVal }) => (
  <Fragment>
    <input
      onChange={e => onInputChange(e.currentTarget.value)}
      onKeyUp={e => onKeyUp(e.keyCode, addTodo)}
      value={inputVal}
    />
    <button onClick={addTodo}>Add Todo</button>
  </Fragment>
);

export default AddTodo;
