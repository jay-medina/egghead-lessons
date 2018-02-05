import React from 'react';
import FilterLink from './FilterLink';

export interface FooterProps {
  onFilterClick: (filter: string) => void;
  visibilityFilter: string;
}

const Footer: React.SFC<FooterProps> = ({ onFilterClick, visibilityFilter }) => (
  <p>
    Show:{' '}
    <FilterLink filter="SHOW_ALL" onClick={onFilterClick} currentFilter={visibilityFilter}>
      All
    </FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE" onClick={onFilterClick} currentFilter={visibilityFilter}>
      Active
    </FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETED" onClick={onFilterClick} currentFilter={visibilityFilter}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
