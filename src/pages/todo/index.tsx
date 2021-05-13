import React, { useEffect, useState } from 'react';
// import "./styles.css";
import { PURGE } from 'redux-persist';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { loadTodos } from 'features/todo/TodoSlice';
import { TodoInputField } from 'components/TodoInputField';
import { TodoList } from 'components/TodoList';

export function Todo() {
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      setIsError(false);
      setIsFirstLoading(true);
      try {
        const result = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const reusltJson = await result.json();

        // console.log(reusltJson.splice(0, 10));
        dispatch(loadTodos(reusltJson.splice(0, 10)));
        setIsFirstLoading(false);
      } catch (error) {
        setIsFirstLoading(false);
        console.log(error);
      }
    };

    // only fetch api when todos data from store is undefined
    if (todos && todos.length === 0) {
      fetchTodos();
    }
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo App Demo</h1>

      <button
        onClick={(e) => {
          dispatch({
            type: PURGE,
            key: 'root',
            result: () => {
              window.location.reload();
            }
          });
        }}
      >
        Clear persist data
      </button>

      <TodoInputField />
      {isFirstLoading && !isError && <>loading...</>}

      {!isFirstLoading && !isError && (
        <>
          <TodoList />
        </>
      )}

      {!isFirstLoading && isError && <h5>{isError}</h5>}
    </div>
  );
}
