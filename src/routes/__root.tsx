import React from "react";
import { createRootRoute } from "@tanstack/react-router";
import { Outlet, Link } from "@tanstack/react-router";
import { searchRoute } from "./search";

export const rootRoute = createRootRoute({
  component: () => <RootLayout />,
  notFoundComponent: () => (
    <div className="text-center text-red-500 mt-10">
      <h1 className="text-4xl font-bold">404 - Sidan kunde inte hittas</h1>
      <p>Det verkar som att sidan du söker inte finns.</p>
      <Link to="/" className="text-blue-500 underline">
        Tillbaka till startsidan
      </Link>
    </div>
  ),
});

rootRoute.addChildren([searchRoute]);

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/search" className="text-gray-300 hover:text-white">
            Sök Nobelpristagare
          </Link>
        </div>
      </nav>
      <main className="container mx-auto py-6">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-900 text-white text-center">
        &copy; 2024 Bokklubben. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
}
