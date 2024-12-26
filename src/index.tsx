import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { homeRoute } from "./routes/home";
import { searchRoute } from "./routes/search";
import { aboutRoute } from "./routes/about";
import { joinRoute } from "./routes/joinRoute";
import { loginRoute } from "./routes/loginRoute";
import "./index.css";

rootRoute.addChildren([
  homeRoute,
  searchRoute,
  aboutRoute,
  joinRoute,
  loginRoute,
]);

const router = createRouter({
  routeTree: rootRoute,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
