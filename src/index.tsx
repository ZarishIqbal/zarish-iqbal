import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import "./index.css";
import { Connect } from "./pages/Connect";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { TodayILearn } from "./pages/TodayILearn";
import { Work } from "./pages/Work";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  { path: "/home", element: <Home /> },
  { path: "/work", element: <Work /> },
  { path: "/resume", element: <Resume /> },
  { path: "/today-i-learn", element: <TodayILearn /> },

  { path: "/connect", element: <Connect /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
