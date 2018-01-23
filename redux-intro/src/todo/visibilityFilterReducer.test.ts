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
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_VISIBLE'
      });
    });

    it('returns the new filter state', () => {
      expect(stateAfter).toBe('SHOW_VISIBLE');
    });
  });

  describe('when the action type is unknown', () => {
    beforeEach(() => {
      stateAfter = visibilityFilter('SHOW_ALL', {
        type: '123',
        filter: 'meow',
      } as any);
    });

    it('returns back the previous state', () => {
      expect(stateAfter).toBe('SHOW_ALL');
    });
  });
});
