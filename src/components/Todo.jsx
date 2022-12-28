import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  return (
    <div>
      <h1>Add your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default Todo;
