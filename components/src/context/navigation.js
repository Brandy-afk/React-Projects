import { createContext, useState, useEffect, useContext } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavContext.Provider value={{ navigate, currentPath }}>
      {currentPath}
      {children}
    </NavContext.Provider>
  );
}

function useNavContext() {
  return useContext(NavContext);
}

export { NavProvider, useNavContext };
export default NavContext;
