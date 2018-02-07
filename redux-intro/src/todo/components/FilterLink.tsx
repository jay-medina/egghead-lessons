import React from 'react';
import { TodoAppState } from '../..';
import { VisibilityFilterAction } from '../visibilityFilterReducer';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actionCreators';

export interface FilterLinkProps {
  filter: string;
}

export interface LinkProps {
  active: boolean | undefined;
  onClick: () => void;
}

const Link: React.SFC<LinkProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (state: TodoAppState, ownProps: FilterLinkProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: (action: VisibilityFilterAction) => void, ownProps: FilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
