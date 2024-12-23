import React from "react";
import SearchNobelWinners from "../components/searchNobelWinners";
export default function SearchPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Sök Nobelpristagare i Litteratur
      </h1>
      <SearchNobelWinners />
    </div>
  );
}
