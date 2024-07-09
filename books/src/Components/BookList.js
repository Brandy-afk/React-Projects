import BookShow from "./BookShow";

export default function BookList({ onEdit, onDelete, books }) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} edit={true} />
  ));

  return <div className="book-container">{renderedBooks}</div>;
}
