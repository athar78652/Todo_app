import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdOutlineEdit } from "react-icons/md";

function TodoList({ todos, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <>
          <div key={index}>
            <div key={todo.id}>{todo.text}</div>
          </div>
          <div>
            <MdOutlineEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </>
      ))}
      ;
    </div>
  );
}

export default TodoList;
