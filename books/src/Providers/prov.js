import { createContext } from "react";
import { useState } from "react";

const BookContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incrementCount: () => setCount(count + 1),
  };

  return <BookContext.Provider>{children}</BookContext.Provider>;
}
