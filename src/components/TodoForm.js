// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText(''); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Write a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;