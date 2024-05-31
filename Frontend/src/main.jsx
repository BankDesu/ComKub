import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home';
import Article from './Article';
import Review from './Review';
import SignInSide from './SignInSide';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "article",
    element: <Article/>,
  },
  {
    path: "review",
    element: <Review/>
  },
  {
    path: "signInSide",
    element: <SignInSide/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
