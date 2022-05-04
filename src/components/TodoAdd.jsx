import React from 'react'
import { useForm } from '../hook/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
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
    </>
  );
}
