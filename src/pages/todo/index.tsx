import React, { useEffect, useState } from 'react';
import './Todo.css';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { fetchTodosfromApi } from 'features/todo/TodoSlice';
import { TodoInputField } from 'components/TodoInputField';
import { TodoList } from 'components/TodoList';
import { CustomNavLink } from 'components/CustomNavLink';

export function Todo() {
  const { todos, status, error } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // only fetch api when todos data from store is undefined
    if (todos && todos.length === 0) {
      dispatch(fetchTodosfromApi());
    }
  }, [dispatch, todos]);

  return (
    <div className="container">
      <h1>Todo App Demo</h1>

      <CustomNavLink />
      <TodoInputField />
      {status === 'loading' && !error && <h5>loading...</h5>}
      {status === 'idle' && !error && <TodoList />}
      {status === 'idle' && error && <h5>{error}</h5>}
    </div>
  );
}
