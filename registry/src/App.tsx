import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/RootLayout";
import DetailsPage from "./pages/details/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/HomePage";
import searchLoader from "./pages/search/searchLoader";
import detailLoader from "./pages/details/detailLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
