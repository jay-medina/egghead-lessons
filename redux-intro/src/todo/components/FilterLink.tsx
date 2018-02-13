import React from 'react';
import { connect } from 'react-redux';
import { TodoAppState } from '../reducers';
import { VisibilityFilterAction } from '../reducers/visibilityFilterReducer';
import { setVisibilityFilter } from './actions';

export interface FilterLinkProps {
  filter: string;
}

export interface LinkProps {
  active: boolean;
  onClick: () => void;
}

const Link: React.SFC<LinkProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (state: TodoAppState, ownProps: FilterLinkProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: (action: VisibilityFilterAction) => void,
  ownProps: FilterLinkProps,
) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
