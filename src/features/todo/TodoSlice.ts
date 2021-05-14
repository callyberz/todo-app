import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch, RootState } from 'app/store';
import { fetchTodos } from 'api/todoApi';
import { Todo } from './types';
// interface TodoType {
//   [todos: string]: Todo[];
// }

type TodosState = {
  // In `status` we will watch
  // if todos are being loaded.
  status: 'loading' | 'idle';

  // `error` will contain an error message.
  error: string | null;
  todos: Todo[];
};

const initialState = {
  todos: [],
  error: null,
  status: 'idle'
} as TodosState;

export const fetchTodosfromApi = createAsyncThunk(
  'todos/fetchTodos',
  async (thunkApi) => {
    const response = await fetchTodos(thunkApi);
    return response;
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((i) => i.id !== action.payload.id);
    }
  },
  extraReducers: {
    [fetchTodosfromApi.pending.type]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodosfromApi.fulfilled.type]: (state, action) => {
      state.status = 'idle';
      state.todos = action.payload;
    },
    [fetchTodosfromApi.rejected.type]: (state, action) => {
      state.status = 'idle';
      state.todos = action.payload.error;
    }
  }
});

export const { toggleTodo, removeTodo } = todoSlice.actions;

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

export default todoSlice.reducer;
