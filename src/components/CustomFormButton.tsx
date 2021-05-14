import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  customButton: {
    display: 'inline-block',
    border: 0,
    borderRadius: '2em',
    fontWeight: 400,
    backgroundColor: '#4eb5f1',
    color: '#fff',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: '0.3em 1.2em',
    margin: '0 0.3em 0.3em 0',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#4095c6'
    }
  }
});

interface ButtonType {
  text: string;
  isForm?: boolean;
  handleOnClick?: () => void;
}

export function CustomFormButton({
  text,
  isForm = false,
  handleOnClick
}: ButtonType) {
  const classes = useStyles();
  return (
    <>
      {isForm ? (
        <button className={classes.customButton} type={'submit'}>
          {text}
        </button>
      ) : (
        <button className={classes.customButton} onClick={handleOnClick}>
          {text}
        </button>
      )}
    </>
  );
}
