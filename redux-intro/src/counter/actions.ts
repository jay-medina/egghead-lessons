import { Action } from './reducer';

export const addCounter = (): Action => {
  return {
    type: 'ADD',
  };
};

export const removeCounter = (index: number): Action => {
  return {
    type: 'REMOVE',
    payload: {
      index,
    },
  };
};

export const incrementCounter = (indexOfCounter: number): Action => {
  return {
    type: 'INCREMENT',
    payload: {
      index: indexOfCounter,
    },
  };
};

export const decrementCounter = (indexOfCounter: number): Action => {
  return {
    type: 'DECREMENT',
    payload: {
      index: indexOfCounter,
    },
  };
};
