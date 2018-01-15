import counter from './reducer';

describe('incrementing', () => {
  describe('when counter is 0', () => {
    it('should be 1', () => {
      expect(counter(0, { type: 'INCREMENT' })).toBe(1);
    });
  });

  describe('when counter is 1', () => {
    it('should be 2', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2);
    });
  });
});

describe('decrementing', () => {
  describe('when counter is 2', () => {
    it('should be 1', () => {
      expect(counter(2, { type: 'DECREMENT' })).toBe(1);
    });
  });

  describe('when counter is 1', () => {
    it('should be 0', () => {
      expect(counter(1, { type: 'DECREMENT' })).toBe(0);
    });
  });
});

describe('when passing an unknown action', () => {
  it('should return the original state', () => {
    expect(counter(1, { type: 'SOMETHING' })).toBe(1);
  });
});

describe('when initial state is undefined', () => {
  it('should return 0 as the initial state', () => {
    expect(counter(undefined, { type: 'SOMETHING' })).toBe(0);
  });
});
