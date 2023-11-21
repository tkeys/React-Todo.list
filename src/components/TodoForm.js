import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value) addTodo(value);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="what shall we do today?"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
    </form>
  );
}

export default TodoForm;
