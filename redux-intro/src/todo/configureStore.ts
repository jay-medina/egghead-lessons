import { throttle } from 'lodash';
import { createStore, Store } from 'redux';
import todoReducer, { TodoAppState } from './reducers';
import { loadState, saveState } from './util';

const devtoolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const configureStore = (): Store<TodoAppState> => {
  const persistedState = loadState();

  const store = createStore<TodoAppState>(
    todoReducer,
    persistedState,
    devtoolExtension && devtoolExtension(),
  );

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000),
  );
  return store;
};

export default configureStore;
