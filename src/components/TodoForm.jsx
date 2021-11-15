import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";
import styles from "../styles/TodoForm.module.css";

function TodoForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const todo = {
    id: Date.now(),
    title,
    completed: false,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      return false;
    }
    dispatch(addTodo(todo));
    setTitle("");
  };

  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        maxLength={42}
        onChange={handleSetTitle}
        value={title}
        placeholder="What i need to do?"
        className={styles.todoInput}
        type="text"
      />
    </form>
  );
}

export default TodoForm;
