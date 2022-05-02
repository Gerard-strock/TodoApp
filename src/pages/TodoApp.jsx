import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../helper/todoReducer";
import { useForm } from "../hook/useForm";
import { TodoList } from "../components/TodoList";
import "../App.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoID) => {
    dispatch({ type: "remove", payload: todoID });
  };

  const handleToggle = (todoID) => {
    dispatch({ type: "toggle", payload: todoID });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

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
          <h3>Add TODO</h3>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              className="form-control"
              value={description}
              type="text"
              name="description"
              placeholder="Learn ..."
              autoComplete="off"
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
