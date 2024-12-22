import { Link } from "@tanstack/react-router";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-text font-sans flex flex-col">
      {/* Header */}
      <header className="bg-card p-4 shadow-md">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-xl font-bold">
            <Link to="/" className="text-text hover:underline">
              Bokklubben
            </Link>
          </h1>
          <ul className="flex gap-4">
            <li>
              <Link
                to="/"
                className="hover:underline focus:outline focus:ring-2 focus:ring-text"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline focus:outline focus:ring-2 focus:ring-text"
                aria-label="About"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 p-6 container mx-auto">{children}</main>

      <footer className="bg-card p-4 text-center text-sm">
        <p>&copy; 2024 Bokklubben. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
};
