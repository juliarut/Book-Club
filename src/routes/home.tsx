import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Välkommen till Bokklubben!
      </h1>
      <p className="text-center mt-4">Utforska och diskutera böcker med oss.</p>
    </div>
  );
}
