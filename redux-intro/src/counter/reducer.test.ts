import { AnyAction } from 'redux';
import { counterList } from './reducer';

describe('addCounter', () => {
  it('should add a zero to the end of the array', () => {
    const listBefore: number[] = [];
    const listAfter = [0];
    expect(
      counterList(listBefore, {
        type: 'ADD',
      }),
    ).toEqual(listAfter);
  });
});

describe('removeCounter', () => {
  it('should remove the item at the specific index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    expect(
      counterList(listBefore, {
        type: 'REMOVE',
        payload: {
          index: 1,
        },
      }),
    ).toEqual(listAfter);
  });
});

describe('incrementCounter', () => {
  it('should increment the item at the specified index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    expect(
      counterList(listBefore, {
        type: 'INCREMENT',
        payload: {
          index: 1,
        },
      }),
    ).toEqual(listAfter);
  });
});

describe('decrementCounter', () => {
  it('should decrement the item at the specified index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 9, 20];

    expect(
      counterList(listBefore, {
        type: 'DECREMENT',
        payload: {
          index: 1,
        },
      }),
    ).toEqual(listAfter);
  });
});

describe('unknown action', () => {
  it('should return back original state', () => {
    const listBefore = [0, 10, 20];

    expect(
      counterList(listBefore, {
        type: 'MSFG',
        payload: {
          index: 1,
        },
      } as AnyAction),
    ).toEqual(listBefore);
  });
});
