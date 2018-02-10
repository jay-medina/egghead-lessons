import { AnyAction } from 'redux';

export interface VisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER';
  filter: string;
}

export const visibilityFilter = (
  state = 'SHOW_ALL',
  action: VisibilityFilterAction | AnyAction,
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return (action as VisibilityFilterAction).filter;
    default:
      return state;
  }
};
