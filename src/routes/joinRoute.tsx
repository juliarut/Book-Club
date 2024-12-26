import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import JoinPage from "../pages/JoinPage";

export const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/join",
  component: JoinPage,
});
