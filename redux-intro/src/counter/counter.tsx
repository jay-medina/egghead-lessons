import * as React from 'react';

export interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter: React.SFC<CounterProps> = ({ count, onDecrement, onIncrement }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;
