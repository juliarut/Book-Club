import { createRoute } from "@tanstack/react-router";
import DiscussionPage from "../pages/DiscussionPage";
import { rootRoute } from "./__root";

export const discussionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discussion",
  component: DiscussionPage,
});
