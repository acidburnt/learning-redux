import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      color: 'black',
      textDecoration: 'none',
    }}
    isActive={(_, location) => location.pathname.includes(filter)}
  >
    {children}
  </NavLink>
);

export default FilterLink;
