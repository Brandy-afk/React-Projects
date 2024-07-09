import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/super",
        element: <div>Hi</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
