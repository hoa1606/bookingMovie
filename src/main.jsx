import React from 'react'
import ReactDOM from 'react-dom/client'

import "./config/style/tailwind.css";
import "./config/style/font-family.css";
import "./config/style/main.css";

import { RouterProvider } from "react-router-dom";
import { router } from './router';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
