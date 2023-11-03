import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import './App.scss'
import Contact from '../src/Pages/Contact/Contact'
import Cleaning_service from '../src/Pages/Cleaning_service/Cleaning_service';
import GreenSpaceService from '../src/Pages/GreenSpaceService/GreenSpaceService'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Cleaning_service",
    element: <Cleaning_service/>,
  },
  {
    path: "/GreenSpaceService",
    element: <GreenSpaceService/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);