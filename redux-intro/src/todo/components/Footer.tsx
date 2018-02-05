import React from 'react';
import FilterLink from './FilterLink';
import { TodoAppState } from '../..';
import { Store } from 'redux';

export interface FooterProps {
  store: Store<TodoAppState>;
}

const Footer: React.SFC<FooterProps> = ({ store }) => (
  <p>
    Show:{' '}
    <FilterLink filter="SHOW_ALL" store={store}>
      All
    </FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE" store={store}>
      Active
    </FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETED" store={store}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
