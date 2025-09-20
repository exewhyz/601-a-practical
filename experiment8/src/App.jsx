import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState(booksData);

  function handleDelete(bookId) {
    const updated = books.filter((book) => {
      return book.id !== bookId;
    });
    setBooks(updated);
  }

  const filteredBooks = books.filter((book) => {
    return (
      book.title
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase()) ||
      book.author.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    );
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button>Add Book</button>
        </form>
      </div>
      <div>
        <ul>
          {filteredBooks.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author}
                <button onClick={() => handleDelete(book.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
