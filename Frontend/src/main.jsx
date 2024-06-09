import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home";
import Article_container from "./Article_container.jsx";
import Recommend from "./Recommend.jsx";
import SignInSide from "./SignInSide";
import Advt from "./Advt.jsx";
import Info from "./Info.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "recommend",
    element: <Recommend />,
  },
  {
    path: "signInSide",
    element: <SignInSide />,
  },
  {
    path: "advt",
    element: <Advt />,
  },
  {
    path: "info/:notebook_id",
    element: <Info />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
