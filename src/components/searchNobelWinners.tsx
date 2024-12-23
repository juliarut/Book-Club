import React, { useState } from "react";
import { nobelWinners } from "../data/nobelWinners";

function SearchNobelWinners() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWinners = nobelWinners.filter(
    (winner) =>
      winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      winner.year.toString().includes(searchTerm) ||
      winner.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-base-200 rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-4">
        Sök Nobelpristagare i litteratur
      </h1>
      <input
        type="text"
        placeholder="Sök efter namn, år eller land..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <ul className="list-none">
        {filteredWinners.length > 0 ? (
          filteredWinners.map((winner, index) => (
            <li key={index} className="bg-base-100 p-4 rounded-lg shadow mb-2">
              <h2 className="text-xl font-semibold">{winner.name}</h2>
              <p className="text-sm text-gray-500">
                {winner.year} - {winner.country}
              </p>
              <p>{winner.description}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">Inga resultat hittades.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchNobelWinners;
