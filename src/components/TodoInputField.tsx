import React from 'react';
import { PURGE } from 'redux-persist';
import { useDispatch } from 'react-redux';
import { addTodo } from 'features/todo/TodoSlice';
import { createUseStyles } from 'react-jss';
import { CustomFormButton } from './CustomFormButton';

const useStyles = createUseStyles({
  root: {
    padding: '8px'
  }
});

export function TodoInputField(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    dispatch(addTodo(text));
    setText('');
  }

  function onClearClick() {
    dispatch({
      type: PURGE,
      key: 'root',
      result: () => {
        window.location.reload();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <input value={text} onChange={handleChange} />
      <CustomFormButton text={'Add Todo'} isForm />
      <CustomFormButton
        text={'Clear persisted data'}
        handleOnClick={onClearClick}
      />
    </form>
  );
}
