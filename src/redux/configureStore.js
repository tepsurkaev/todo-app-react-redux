import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

const saveTodoReducerToLocalStorage = localStorage.getItem("todo-reducer");

const preloadedState = {
  todo: saveTodoReducerToLocalStorage
    ? JSON.parse(saveTodoReducerToLocalStorage)
    : undefined,
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

store.subscribe(() => {
  const { todo } = store.getState();

  localStorage.setItem("todo-reducer", JSON.stringify(todo));
});
