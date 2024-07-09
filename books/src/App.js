import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";
import { useState } from "react";
import "./css/main.css";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = function (title, url, author) {
    setBooks([...books, { id: getRandomId(), title, url, author }]);
  };

  const editBook = function () {};

  const deleteBook = function (id) {
    setBooks(
      books.map((book) => {
        if (book.id !== id) return book;
      })
    );
  };

  console.log(books);

  return (
    <div className="container">
      <BookList onEdit={editBook} onDelete={deleteBook} books={books} />
      <BookCreate createBook={createBook} books={books} />
    </div>
  );
}

function getRandomId() {
  // Generate a random string of 8 characters
  return Math.random().toString(36).substring(2, 10);
}
