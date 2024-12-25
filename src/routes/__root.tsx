import { createRootRoute } from "@tanstack/react-router";
import { Outlet, Link } from "@tanstack/react-router";
import React, { useState } from "react";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-300 hover:text-white"
          >
            Bokklubben
          </Link>
          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="text-gray-300 hover:text-white">
                Sök Nobelpristagare
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
          </ul>
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sök Nobelpristagare
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
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
