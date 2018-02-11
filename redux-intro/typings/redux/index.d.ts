import { Reducer, StoreEnhancer } from 'redux';

declare module 'redux' {
  export interface StoreCreator {
    <S>(reducer: Reducer<S>, preloadedState?: S, enhancer?: StoreEnhancer<S>): Store<S>;
  }
}
