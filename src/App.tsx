import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebHome from "./pages/WebHome";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <WebHome />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
