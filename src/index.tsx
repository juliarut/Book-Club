import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { homeRoute } from "./routes/home";
import { searchRoute } from "./routes/search";
import { aboutRoute } from "./routes/about";
import { joinRoute } from "./routes/joinRoute";
import { loginRoute } from "./routes/loginRoute";
import { discussionRoute } from "./routes/discussionRoute";
import "./index.css";

rootRoute.addChildren([
  homeRoute,
  searchRoute,
  aboutRoute,
  joinRoute,
  loginRoute,
  discussionRoute,
]);

const router = createRouter({
  routeTree: rootRoute,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
