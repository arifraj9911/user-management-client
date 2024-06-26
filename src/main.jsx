import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import NewUser from "./components/NewUser/NewUser.jsx";
import AllUser from "./components/AllUser/AllUser.jsx";
import UpdateUser from "./components/UpdateUser/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <NewUser></NewUser>,
      },
      {
        path: "/users",
        element: <AllUser></AllUser>,
        loader: () => fetch("https://user-management-server-iota.vercel.app/users"),
      },
      {
        path:"/update/:id",
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`https://user-management-server-iota.vercel.app/users/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
