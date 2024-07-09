import BookEdit from "./BookEdit";

export default function BookShow({ book, edit }) {
  console.log(edit);
  return (
    <div className="book-display">
      <img className="img" src={book.url} alt="image" />
      {(edit && <BookEdit />) || (
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
      )}
    </div>
  );
}
