import Book from "../book";
import { useState } from "react";

export default function BookCreate({ createBook }) {
  const [formInput, setFormInput] = useState({
    title: "",
    imageURL: "",
    author: "",
  });

  const onValueChanged = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (formInput.title && formInput.imageURL && formInput.author) {
      createBook(formInput.title, formInput.imageURL, formInput.author);
    }
  };

  return (
    <div className="create-container">
      <h2>Add Book</h2>
      <form onSubmit={onSubmit}>
        <div className="form-field">
          {" "}
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            name="title"
            value={formInput.title}
            onChange={onValueChanged}
          />
        </div>
        <div className="form-field">
          {" "}
          <label htmlFor="imageURL">Book Image:</label>
          <input
            type="text"
            name="imageURL"
            value={formInput.imageURL}
            onChange={onValueChanged}
          />
        </div>
        <div className="form-field">
          {" "}
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            value={formInput.author}
            onChange={onValueChanged}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
