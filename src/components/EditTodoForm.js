import React, { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value) editTodo(value, task.id);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
