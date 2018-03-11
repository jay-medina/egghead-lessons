import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCounter, decrementCounter, incrementCounter, removeCounter } from './actions';
import Counter from './counter';
import { Action, CounterListState } from './reducer';

export interface CounterProps {
  counters: CounterListState;
  onIncrementCounter: (indexOfCounter: number) => void;
  onDecrementCounter: (indexOfCounter: number) => void;
  onAddCounter: () => void;
  onRemoveCounter: (index: number) => void;
}

const CounterList: React.SFC<CounterProps> = (props) => {
  const { counters, onAddCounter, onRemoveCounter, onDecrementCounter, onIncrementCounter } = props;
  const removeLastCounter = () => onRemoveCounter(counters.length - 1);
  const onIncrement = (index: number) => () => onIncrementCounter(index);
  const onDecrement = (index: number) => () => onDecrementCounter(index);

  return (
    <div>
      {counters.map((count, index) => (
        <Counter
          key={index}
          count={count}
          onIncrement={onIncrement(index)}
          onDecrement={onDecrement(index)}
        />
      ))}
      <button onClick={onAddCounter}>Add Counter</button>{' '}
      <button onClick={removeLastCounter}>RemoveCounter</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CounterListState>) => {
  return {
    onAddCounter() {
      dispatch<Action>(addCounter());
    },
    onRemoveCounter(index: number) {
      dispatch<Action>(removeCounter(index));
    },
    onIncrementCounter(indexOfCounter: number) {
      dispatch<Action>(incrementCounter(indexOfCounter));
    },
    onDecrementCounter(indexOfCounter: number) {
      dispatch<Action>(decrementCounter(indexOfCounter));
    },
  };
};

function mapStateToProps(counters: CounterListState) {
  return {
    counters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
