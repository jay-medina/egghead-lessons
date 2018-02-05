import React from 'react';
import { TodoAppState } from '../..';
import { Store } from 'redux';

export interface FilterLinkProps {
  filter: string;
  store: Store<TodoAppState>;
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

class FilterLink extends React.Component<FilterLinkProps> {
  private unsubscribe = () => {};

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { filter, children, store } = this.props;
    const state = store.getState();
    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      >
        {children}
      </Link>
    );
  }
}

export default FilterLink;
