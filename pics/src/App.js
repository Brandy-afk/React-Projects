import { useState } from "react";

import "./css/styles.css";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);

  const onSearch = async (query) => {
    try {
      const imageData = await searchImages(query);
      setImages(imageData);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="component">
      <SearchBar onSearch={onSearch} />
      <ImageList images={images} />
    </div>
  );
}
