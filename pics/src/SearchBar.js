import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.replace(/[0-9]/, ""));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Search Term</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter Query..."
        />
        {searchTerm.length < 3 && (
          <p style={{ color: "red", display: "inline" }}>Term must be longer</p>
        )}
      </form>
    </div>
  );
}
