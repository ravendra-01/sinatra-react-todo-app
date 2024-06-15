import React, { useState } from 'react';

function CreateTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { title };

    fetch('http://localhost:4567/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => {
        onAddTodo(data);
        setTitle('');
      })
      .catch(error => alert(error));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">What would you like to do?</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg" 
          required 
        />
      </div>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">Add</button>
    </form>
  );
}

export default CreateTodo;
