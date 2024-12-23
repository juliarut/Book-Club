import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import SearchPage from "../pages/searchPage";

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});
