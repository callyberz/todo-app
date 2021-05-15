import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  linkItem: {
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
      borderBottom: '2px solid'
    }
  }
});

const paths = [
  { label: 'All', path: '/' },
  { label: 'Active', path: '/active' },
  { label: 'Completed', path: '/completed' }
];

interface NavLinkType {}

export function CustomNavLink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {paths.map((i) => (
        <NavLink
          key={i.path}
          to={i.path}
          className={classes.linkItem}
          exact
          activeStyle={{
            fontWeight: 400,
            borderBottom: '2px solid'
          }}
        >
          <span>{i.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
