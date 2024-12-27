import React from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { Link } from "@tanstack/react-router";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

function Home() {
  const currentLaureate = {
    name: "Gabriel García Márquez",
    year: 1982,
    motivation:
      "För sina romaner och noveller där det fantastiska och det realistiska kombineras i en rikligt sammansatt värld av poesi och fantasi.",
    book: {
      title: "Hundra år av ensamhet",
      description:
        "En av de mest inflytelserika romanerna i latinamerikansk litteratur, som utforskar flera generationers historia i den fiktiva byn Macondo.",
    },
  };

  const nextMeeting = {
    date: "5 januari 2024",
    time: "18:00",
    location: "Bokklubbens bibliotek, Salen A",
  };

  return (
    <div className="p-8 space-y-8 bg-secondary text-neutral">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">
          Välkommen till Bokklubben!
        </h1>
        <p className="text-lg mt-4">
          Utforska och diskutera Nobelpristagare i litteratur.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/join" className="btn btn-primary flex items-center gap-2">
            <span>Gå med nu</span>
          </Link>
          <Link
            to="/login"
            className="btn btn-secondary flex items-center gap-2"
          >
            <span>Logga in</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-primary text-base-100 shadow-md p-6">
          <figure>
            <img
              src="/images/hands.jpeg"
              alt="Hands"
              className="w-full h-60 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">{currentLaureate.name}</h2>
            <p className="italic mb-4">
              Nobelpristagare i litteratur, {currentLaureate.year}.
            </p>
            <p>{currentLaureate.motivation}</p>
            <hr className="my-4" />
            <h3 className="text-lg font-bold">Rekommenderad bok:</h3>
            <p>{currentLaureate.book.title}</p>
            <p>{currentLaureate.book.description}</p>
          </div>
        </div>

        <div className="card bg-primary text-base-100 shadow-md p-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Nästa Möte</h2>
            <p className="mt-4">
              <strong>Datum:</strong> {nextMeeting.date}
            </p>
            <p>
              <strong>Tid:</strong> {nextMeeting.time}
            </p>
            <p>
              <strong>Plats:</strong> {nextMeeting.location}
            </p>
            <hr className="my-4" />
            <p>
              Kom och delta i vår diskussion om den aktuella Nobelpristagaren
              och deras verk.
            </p>
          </div>
        </div>

        <div className="card bg-primary text-base-100 shadow-md p-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Diskussionssida</h2>
            <p className="mt-4">
              Delta i diskussioner inför nästa träff och håll kontakten med
              andra medlemmar i bokklubben.
            </p>
            <Link to="/discussion" className="btn bg-white text-primary mt-4">
              Gå till Diskussionssidan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
