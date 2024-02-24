import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newItem">Add to do list</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add new item</button>
    </form>
  );
}

export default AddTaskForm;
