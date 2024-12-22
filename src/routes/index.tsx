import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-6">
      {/* Välkomstsektion */}
      <section className="bg-card p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-serif text-center">
          Välkommen till Bokklubben
        </h1>
        <p className="text-center">
          Dela läsglädje och skapa minnesvärda diskussioner.
        </p>
      </section>

      {/* Nästa träff */}
      <section className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Nästa träff</h2>
        <p>Onsdag, 24 Januari 2024, kl. 18:00</p>
      </section>

      {/* Aktuell bok */}
      <section className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Vi läser just nu:</h2>
        <p className="text-lg">"1984" av George Orwell</p>
      </section>

      {/* Sökformulär */}
      <section className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Sök efter en bok</h2>
        <form className="flex flex-col gap-4">
          <label htmlFor="search" className="text-sm">
            Skriv in titeln på boken:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Sök..."
            className="border rounded p-2 focus:ring-2 focus:ring-card focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-primary-dark focus:ring-2 focus:ring-card"
          >
            Sök
          </button>
        </form>
      </section>
    </div>
  );
}
