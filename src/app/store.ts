import { createLogger } from 'redux-logger';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/TodoSlice';

const logger = createLogger({
  collapsed: true
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
