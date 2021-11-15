import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.unshift(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeAllCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    completeToggle(state, action) {
      state.todos.map((todo) => {
        if (action.payload === todo.id) {
          !todo.completed ? (todo.completed = true) : (todo.completed = false);
        }
        return todo;
      });
    },
  },
});

export const selectTodos = (state) => state.todo.todos;

export const { addTodo, removeTodo, completeToggle, removeAllCompletedTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
