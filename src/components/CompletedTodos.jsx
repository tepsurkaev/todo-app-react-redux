import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completeToggle,
  removeTodo,
  selectTodos,
} from "../redux/features/todoSlice";
import styles from "../styles/Todos.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";

function CompletedTodos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const filteredTodos = todos.filter((todo) => todo.completed);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleMakeFavorite = (id) => {
    dispatch(completeToggle(id));
  };

  return filteredTodos.map((todo) => (
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

export default CompletedTodos;
