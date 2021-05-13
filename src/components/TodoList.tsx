import React from 'react';
import { TodoListItem } from './TodoListItem';
// import { RootState, AppThunk } from 'app/store';

import { useAppSelector, useAppDispatch } from 'app/hooks';

// import { RootState } from 'app/rootReducer';
// import { useSelector } from 'react-redux';
// import {} from 'features/todo/TodoSlice';

// import { VisibilityFilter } from 'features/visibilityFilter/visibilityFilterSlice';
// import { Todo } from './types';

// const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
//   switch (filter) {
//     case VisibilityFilter.ShowAll:
//       return todos;
//     case VisibilityFilter.ShowCompleted:
//       return todos.filter(t => t.completed);
//     case VisibilityFilter.ShowActive:
//       return todos.filter(t => !t.completed);
//     default:
//       throw new Error('Unknown filter: ' + filter);
//   }
// };

export function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos);
  // useSelector((state: RootState) => state.counter.value)
  // console.log(todos);
  // const dispatch = useDispatch();
  // const todos = useSelector((state: RootState) =>
  //   getVisibleTodos(state.todos, state.visibilityFilter)
  // );
  return (
    <ul>
      {todos && todos.map((todo) => <TodoListItem key={todo.id} item={todo} />)}
    </ul>
  );
}
