import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Om Bokklubben</h1>
      <p>
        Här kan du läsa mer om vår bokklubb och vårt fokus på Nobelpristagare.
      </p>
    </div>
  );
}
