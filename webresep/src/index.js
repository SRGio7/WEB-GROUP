import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserLogin from "./pages/loggedUser/logged";
import { AuthProvider } from "./AuthProvider"; // Import AuthProvider
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import Rsp from "./pages/loggedUser/resep";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "resep",
    element: <Rsp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "loginuser",
    element: (
      <ProtectedRoute>
        <UserLogin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <div style={{ fontSize: "200px" }}>Error 404</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

reportWebVitals();
