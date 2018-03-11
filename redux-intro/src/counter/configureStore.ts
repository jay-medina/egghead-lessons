import { createStore } from 'redux';
import { counterList } from './reducer';

export default function configureStore() {
  const store = createStore(counterList);

  return store;
}
