import React from 'react';

function DeleteTodo({ todoId, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:4567/todos/${todoId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          onDelete(todoId);
        } else {
          alert('Error deleting todo item!');
        }
      })
      .catch(error => alert(error));
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded-lg">
      Delete
    </button>
  );
}

export default DeleteTodo;
