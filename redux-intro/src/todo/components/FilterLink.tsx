import React from 'react';
import { VisibilityFilterAction } from '../visibilityFilterReducer';

export interface FilterLinkProps {
  filter: string;
  dispatch: (action: VisibilityFilterAction) => void;
  currentFilter: string;
}

const FilterLink: React.SFC<FilterLinkProps> = props => {
  const { filter, dispatch, children, currentFilter } = props;

  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
