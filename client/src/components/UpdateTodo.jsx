import React from 'react';

function UpdateTodo({ todoId, currentStatus, onUpdate }) {
  const handleUpdate = () => {
    fetch(`http://localhost:4567/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !currentStatus }),
    })
      .then(response => response.json())
      .then(updatedTodo => {
        onUpdate(updatedTodo);
      })
      .catch(error => alert('Error updating todo item!'));
  };
  const buttonClass = `bg-blue-500 text-white px-2 py-1 rounded-lg ${currentStatus ? 'bg-gray-500' : 'bg-blue-500'}`;
  return (
    <button onClick={handleUpdate} className={buttonClass}>
      {currentStatus ? 'Completed' : 'Pending'}
    </button>
  );
}

export default UpdateTodo;
