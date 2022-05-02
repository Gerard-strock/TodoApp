import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn-danger btn-sm"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
