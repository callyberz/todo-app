import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodoListItem } from './TodoListItem';
import { useAppSelector, useAppDispatch } from 'app/hooks';
interface ParamTypes {
  status: string;
}

export function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos);
  const [todosShowing, setTodosShowing] = useState(todos);

  // status: completed => item.completed = true
  // status: active => item.completed = false
  // status: all => item.completed = true || false
  let { status } = useParams<ParamTypes>();
  useEffect(() => {
    switch (status) {
      case 'active':
        setTodosShowing(todos.filter((todo) => !todo.completed));

        break;
      case 'completed':
        setTodosShowing(todos.filter((todo) => todo.completed));
        break;

      default:
        setTodosShowing(todos);
        break;
    }
  }, [status, todos]);

  return (
    <div>
      {todosShowing &&
        todosShowing.map((todo) => <TodoListItem key={todo.id} item={todo} />)}
    </div>
  );
}
