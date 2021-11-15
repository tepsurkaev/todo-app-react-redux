import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTodos,
  removeAllCompletedTodos,
} from "../redux/features/todoSlice";
import styles from "../styles/Footer.module.css";

function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const findCompletedTodo = todos.find((todo) => todo.completed);

  const handleRemoveAllCompletedTodos = () => {
    dispatch(removeAllCompletedTodos());
  };

  if (todos.length === 0) {
    return null;
  }
  return (
    <div className={styles.footer}>
      <p>
        {todos.length === 1
          ? `${todos.length} todo left`
          : `${todos.length} todos left`}
      </p>
      <div className={styles.filters}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.unActive
          }
          to="/all"
        >
          All
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.unActive
          }
          to="/active"
        >
          Active
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.unActive
          }
          to="/completed"
        >
          Completed
        </NavLink>
      </div>
      {findCompletedTodo ? (
        <p
          className={styles.clearCompleted}
          onClick={handleRemoveAllCompletedTodos}
        >
          Remove completed
        </p>
      ) : null}
    </div>
  );
}

export default Footer;
