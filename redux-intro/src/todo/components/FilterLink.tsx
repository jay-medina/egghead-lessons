import React from 'react';
import { NavLink } from 'react-router-dom';

export interface FilterLinkProps {
  filter: 'all' | 'active' | 'completed';
}

const getNavLink = (filter: FilterLinkProps['filter']) => {
  if (filter === 'all') {
    return '/';
  }
  return `/${filter}`;
};

const FilterLink: React.SFC<FilterLinkProps> = ({ filter, children }) => (
  <NavLink
    exact
    to={getNavLink(filter)}
    activeStyle={{
      color: '#000',
      textDecoration: 'none',
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
