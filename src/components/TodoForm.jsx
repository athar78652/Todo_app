import React, { useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form">
      <>
        <input
          placeholder="Add your plan to list"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
        <button onClick={handleSubmit}>Add</button>
      </>
    </form>
  );
}

export default TodoForm;
