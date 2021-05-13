import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
// import { RootState } from "app/rootReducer";
// import { writeTodos, readTodos as fetchTodos } from "api/jsonstore";
import { Todo } from './types';
interface TodoType {
  [todos: string]: Todo[];
}

const initialState: TodoType = {};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    receiveTodos(state, action: PayloadAction<Todo[]>) {
      return { todos: action.payload };
    },
    // receiveTodo(state, action: PayloadAction<Todo>) {
    //   state.push(action.payload);
    // },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      return { todos: state.todos.filter((i) => i.id !== action.payload.id) };
    }
  }
});

export const { toggleTodo, removeTodo } = todoSlice.actions;

// export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
//   const id = Math.random()
//     .toString(36)
//     .substr(2, 9);
//   window.history.pushState(null, document.title, `${id}`);
// };

export const loadTodos =
  (data: Todo[]): AppThunk =>
  async (dispatch: AppDispatch) => {
    // console.log(data);
    dispatch(todoSlice.actions.receiveTodos(data));
  };

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
      title: text,
      userId: '1'
    };
    dispatch(todoSlice.actions.addTodo(newTodo));
  };

// export const addTodo = (text: string): AppThunk => async (
//   dispatch: AppDispatch,
//   getState: () => RootState
// ) => {
//   const newTodo: Todo = {
//     id: Math.random()
//       .toString(36)
//       .substr(2, 9),
//     completed: false,
//     text: text
//   };
//   dispatch(todoSlice.actions.receiveTodo(newTodo));

//   writeTodos(getState().todos);
// };
export default todoSlice.reducer;
