import * as React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Todo } from 'features/todo/types';
import { toggleTodo, removeTodo } from 'features/todo/TodoSlice';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginBottom: '1vh',
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
    boxShadow: '1px 1px 1px 1px #ccc'
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  checkBoxWrapper: { padding: '8px', margin: 'auto' },
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
    }
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
