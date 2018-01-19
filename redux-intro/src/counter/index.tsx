import * as React from 'react';
import { Store } from 'redux';

export interface CounterProps {
  state: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter: React.SFC<CounterProps> = ({ state, onDecrement, onIncrement }) => (
  <div>
    <h1>{state}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;
