// src/components/TodoList.js
import React from 'react';
// import { useLanguage } from '../contexts/LanguageContext'; // Correct import

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  // Your list logic here
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.isCompleted ? 'Unmark' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};


export default TodoList;