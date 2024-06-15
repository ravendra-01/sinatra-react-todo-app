import React, { useEffect, useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

function Main() {
  const [todos, setTodos] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4567/')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(error => alert(error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFlashMessage('Todo item created successfully!');
    setTimeout(() => {
      setFlashMessage('');
    }, 3000);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
    setFlashMessage('Todo item deleted successfully!');
    setTimeout(() => {
      setFlashMessage('');
    }, 3000);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo._id === updatedTodo._id ? updatedTodo : todo)));
    setFlashMessage('Todo item updated successfully!');
    setTimeout(() => {
      setFlashMessage('');
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {flashMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {flashMessage}
        </div>
      )}
      <CreateTodo onAddTodo={addTodo} />
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">List</th>
            <th className="px-4 py-2 text-center">Status</th>
            <th className="px-4 py-2 text-center">Delete</th>
          </tr>
        </thead>
        <TodoList todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
      </table>
    </div>
  );
}

export default Main;
