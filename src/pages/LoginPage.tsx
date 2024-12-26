import React, { useState } from "react";
import { loginUser } from "../mockBackend";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ field: string; message: string } | null>(
    null
  );
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError({ field: "email", message: "Ogiltig e-postadress." });
      return;
    }
    if (password.length < 6) {
      setError({
        field: "password",
        message: "Lösenordet måste vara minst 6 tecken långt.",
      });
      return;
    }

    setError(null);

    const result = loginUser(email, password);
    setMessage(result);

    if (result === "Inloggning lyckades!") {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Logga in</h1>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("lyckades") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-white p-6 shadow-md rounded"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            E-post
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input input-bordered w-full ${
              error?.field === "email" ? "border-red-500" : ""
            }`}
          />
          {error?.field === "email" && (
            <p className="text-red-500 text-sm">{error.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold"
          >
            Lösenord
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input input-bordered w-full ${
              error?.field === "password" ? "border-red-500" : ""
            }`}
          />
          {error?.field === "password" && (
            <p className="text-red-500 text-sm">{error.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Logga in
        </button>
      </form>
    </div>
  );
}
