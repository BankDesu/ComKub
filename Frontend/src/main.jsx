import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home";
import Article_container from "./Article_container.jsx";
import Review from "./Review";
import SignInSide from "./SignInSide";
import Advt from "./Advt.jsx";
import Info from "./Info.jsx";


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "article_container",
    element: <Article_container />,
  },
  {
    path: "review",
    element: <Review />,
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
    path: "info",
    element: <Info />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
