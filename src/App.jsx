import HomePage from "./routes/HomePage/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage.jsx";
import Layout from "./routes/Layout/Layout.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import ProfilePage from "./routes/ProfilePage/ProfilePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
