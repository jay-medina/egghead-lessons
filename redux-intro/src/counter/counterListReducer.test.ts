import { addCounter, removeCounter, incrementCounter } from './counterListReducer';

describe('addCounter', () => {
  it('should add a zero to the end of the array', () => {
    const listBefore: number[] = [];
    const listAfter = [0];
    expect(addCounter(listBefore)).toEqual(listAfter);
  });
});

describe('removeCounter', () => {
  it('should remove the item at the specific index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  });
});

describe('incrementCounter', () => {
  it('should increment the item at the specified index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  });
});
