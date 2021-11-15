import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todoSlice";
import { removeTodo, completeToggle } from "../redux/features/todoSlice";
import styles from "../styles/Todos.module.css";

function AllTodos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleMakeFavorite = (id) => {
    dispatch(completeToggle(id));
  };

  return todos.map((todo) => (
    <div key={todo.id} className={styles.todo}>
      <div
        className={
          todo.completed ? styles.completedCheckbox : styles.uncompletedCheckbox
        }
        onClick={() => handleMakeFavorite(todo.id)}
      >
        {todo.completed ? <FaCheck className={styles.checkboxIcon} /> : null}
      </div>
      <p
        className={
          todo.completed ? styles.completedTitle : styles.uncompletedTitle
        }
      >
        {todo.title}
      </p>
      <button
        onClick={() => handleRemoveTodo(todo.id)}
        className={styles.removeTodo}
      >
        <FaTrash />
      </button>
    </div>
  ));
}

export default AllTodos;
