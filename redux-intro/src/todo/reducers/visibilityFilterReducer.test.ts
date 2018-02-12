import { visibilityFilter } from './visibilityFilterReducer';

describe('VisibilityFilterReducer', () => {
  let stateAfter: string;
  describe('the initial state', () => {
    beforeEach(() => {
      stateAfter = visibilityFilter(undefined, {} as any);
    });
    it('returns SHOW_ALL', () => {
      expect(stateAfter).toBe('SHOW_ALL');
    });
  });

  describe('setting the filter', () => {
    beforeEach(() => {
      stateAfter = visibilityFilter('SHOW_ALL', {
        filter: 'SHOW_VISIBLE',
        type: 'SET_VISIBILITY_FILTER',
      });
    });

    it('returns the new filter state', () => {
      expect(stateAfter).toBe('SHOW_VISIBLE');
    });
  });

  describe('when the action type is unknown', () => {
    beforeEach(() => {
      stateAfter = visibilityFilter('SHOW_ALL', {
        filter: 'meow',
        type: '123',
      });
    });

    it('returns back the previous state', () => {
      expect(stateAfter).toBe('SHOW_ALL');
    });
  });
});
