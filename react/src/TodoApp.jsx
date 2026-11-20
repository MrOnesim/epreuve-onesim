import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const remaining = tasks.filter(t => !t.done).length;

  return (
    <div>
      <h2>Todo</h2>
      <form onSubmit={addTask}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nouvelle tâche" />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </ul>
      <p>Tâches restantes: {remaining}</p>
    </div>
  );
}
