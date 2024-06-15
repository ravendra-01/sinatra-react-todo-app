import React from 'react';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';

function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
  return (
    <tbody>
      {todos.map(todo => (
        <tr key={todo._id} className="bg-gray-100">
          <td className="border px-4 py-2">{todo.title}</td>
          <td className="border px-4 py-2 text-center">
            <UpdateTodo todoId={todo._id} currentStatus={todo.completed} onUpdate={onUpdateTodo} />
          </td>
          <td className="border px-4 py-2 text-center">
            <DeleteTodo todoId={todo._id} onDelete={onDeleteTodo} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TodoList;
