export interface AddAction {
  type: 'ADD';
}

export interface RemoveAction {
  type: 'REMOVE';
  payload: {
    index: number;
  };
}

export interface ModifyCountAction {
  type: 'INCREMENT' | 'DECREMENT';
  payload: {
    index: number;
  };
}

export type CounterListState = number[];

export type Action = AddAction | RemoveAction | ModifyCountAction;

export const counterList = (state: CounterListState = [], action: Action): number[] => {
  switch (action.type) {
    case 'ADD':
      return addCounter(state);
    case 'REMOVE':
      return removeCounter(state, action);
    case 'INCREMENT':
    case 'DECREMENT':
      return modifyCountAction(state, action);
    default:
      return state;
  }
};

const addCounter = (state: number[]) => [...state, 0];

const removeCounter = (state: number[], action: RemoveAction) => {
  const { index } = action.payload;
  return [...state.slice(0, index), ...state.slice(index + 1)];
};

const modifyCountAction = (state: number[], action: ModifyCountAction) => {
  const { index } = action.payload;

  return [...state.slice(0, index), counter(state[index], action), ...state.slice(index + 1)];
};

function counter(state = 0, action: ModifyCountAction): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state - 1;
  }
}
