import React from 'react';

export interface FilterLinkProps {
  filter: string;
  onClick: (filter: string) => void;
  currentFilter: string;
}

const FilterLink: React.SFC<FilterLinkProps> = props => {
  const { filter, onClick, children, currentFilter } = props;

  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
