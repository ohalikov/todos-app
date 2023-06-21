import './App.css';

import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';

import { useState } from 'react';

function App() {
  const [todos, setTodo] = useState('');
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={setTodo} />
      <TodoList {...todos} />
    </div>
  );
}

export default App;
