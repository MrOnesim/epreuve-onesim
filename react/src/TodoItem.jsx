import React from 'react';

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: 8 }}>Supprimer</button>
    </li>
  );
}
