import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../helper/todoReducer";
import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import "../App.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoID) => {
    dispatch({ type: "remove", payload: todoID });
  };

  const handleToggle = (todoID) => {
    dispatch({ type: "toggle", payload: todoID });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  }

  return (
    <div className="App">
      <h2>TodoApp: {todos.length}</h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  );
};
