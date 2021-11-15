import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import "../styles/global.css";
import AllTodos from "./AllTodos";
import Footer from "./Footer";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";

function App() {
  return (
    <>
      <p id="title">To-Do</p>
      <div id="todo">
        <TodoForm />
        <Router>
          <Routes>
            <Route path="/" element={<AllTodos />} />
            <Route path="/all" element={<AllTodos />} />
            <Route path="/active" element={<ActiveTodos />} />
            <Route path="/completed" element={<CompletedTodos />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
