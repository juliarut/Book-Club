import { createRootRoute } from "@tanstack/react-router";
import { Outlet, Link } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: () => <RootLayout />,
  notFoundComponent: () => (
    <div className="text-center text-red-500 mt-10">
      <h1 className="text-4xl font-bold">404 - Sidan kunde inte hittas</h1>
      <p>Det verkar som att sidan du söker inte finns.</p>
    </div>
  ),
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <Link
            to="/"
            activeProps={{ className: "font-bold underline" }}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "font-bold underline" }}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
        </div>
      </nav>

      <main className="container mx-auto py-6 px-4">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-900 text-white text-center">
        &copy; 2024 Bokklubben. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
}
