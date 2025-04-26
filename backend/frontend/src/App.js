import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return (
      <div>
        <h1>Task Manager</h1>
        <Register setToken={setToken} />
        <Login setToken={setToken} />
      </div>
    );
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList token={token} />
    </div>
  );
}

export default App;
