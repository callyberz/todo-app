import React, { useEffect, useState } from 'react';
// import "./styles.css";
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { useDispatch } from 'react-redux';
import { loadTodos } from 'features/todo/TodoSlice';
import { TodoInputField } from 'components/TodoInputField';
import { TodoList } from 'components/TodoList';

export function Todo() {
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const dispatch = useDispatch();
  // const count = useAppSelector(selectCount);
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
        // setTodoItem(reusltJson.splice(0, 10));
        dispatch(loadTodos(reusltJson.splice(0, 10)));
        setIsFirstLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo App Demo</h1>

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
