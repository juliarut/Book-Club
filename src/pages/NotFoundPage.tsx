import React from "react";
import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Sidan hittades inte</h2>
      <p className="mb-6">
        Vi kunde inte hitta sidan du letade efter. Kontrollera länken och försök
        igen.
      </p>
      <Link to="/" className="btn btn-primary">
        Gå till startsidan
      </Link>
    </div>
  );
}
