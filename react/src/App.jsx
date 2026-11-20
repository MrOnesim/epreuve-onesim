import React from 'react';
import TodoApp from './TodoApp.jsx';
import UserList from './UserList.jsx';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Epreuve React</h1>
      <TodoApp />
      <hr />
      <UserList />
    </div>
  );
}
