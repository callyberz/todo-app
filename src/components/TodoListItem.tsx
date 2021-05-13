import * as React from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Todo } from 'features/todo/types';

// import "./styles.css";
// import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from 'features/todo/TodoSlice';

type ItemType = {
  item: Todo;
};

export function TodoListItem({ item }: ItemType) {
  const { title, completed } = item;
  const dispatch = useAppDispatch();

  const handleCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    dispatch(toggleTodo(item));
  };

  const handleOnClick = () => {
    dispatch(removeTodo(item));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckBoxOnChange}
      />
      {`${title}`}
      {/* <span>x</span> */}
      <button onClick={handleOnClick}>delete</button>
    </div>
  );
}
