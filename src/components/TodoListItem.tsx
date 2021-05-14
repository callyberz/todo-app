import * as React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Todo } from 'features/todo/types';
import { toggleTodo, removeTodo } from 'features/todo/TodoSlice';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginBottom: '1vh',
    border: '1px solid',
    borderRadius: '8px',
    boxShadow: '2px 2px 2px #8888'
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  checkBoxWrapper: { padding: '8px', margin: 'auto' },
  checkBox: {
    position: 'relative',
    display: 'flex',
    margin: '.6em 0',
    alignItems: 'center',
    color: '#9e9e9e',
    transition: 'color 250ms cubic-bezier(.4,.0,.23,1)'
  },
  buttonWrapper: {
    margin: 'auto'
  },
  titleWrapper: {
    wordBreak: 'break-all',
    fontSize: '1rem',
    fontWeight: 400,
    flex: 1
  },
  titelStrike: {
    textDecoration: 'line-through'
  },
  crossIcon: {
    border: 0,
    padding: 0,
    width: '30px',
    height: '30px',
    fontSize: '25px',
    color: '#000',
    cursor: 'pointer',
    background: '#f5f5f5',
    transition: 'transform 0.7s ease-out',
    '&::after': {
      content: "'x'"
    },
    '&:hover': {}
  }
});

type ItemType = {
  item: Todo;
};

export function TodoListItem({ item }: ItemType) {
  const classes = useStyles();
  const { title, completed } = item;
  const dispatch = useAppDispatch();

  const handleCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleTodo(item));
  };

  const handleOnClick = () => {
    dispatch(removeTodo(item));
  };

  return (
    <div className={classes.root}>
      <div className={classes.itemContainer}>
        <div className={classes.checkBoxWrapper}>
          <input
            className={classes.checkBox}
            type="checkbox"
            checked={completed}
            onChange={handleCheckBoxOnChange}
          />
        </div>

        <p
          className={`${classes.titleWrapper} ${
            completed && classes.titelStrike
          }`}
        >{`${title}`}</p>

        <div className={classes.buttonWrapper}>
          <button
            onClick={handleOnClick}
            className={classes.crossIcon}
          ></button>
        </div>
      </div>
    </div>
  );
}
