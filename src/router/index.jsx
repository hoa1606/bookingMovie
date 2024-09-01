import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { UserTemplates } from "../atomic/templates/userTemplates";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTemplates/>,
  },
]);

<RouterProvider router={router} />;