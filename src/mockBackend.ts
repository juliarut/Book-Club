type User = {
  name: string;
  email: string;
  password: string;
};

const mockDatabase: { users: User[] } = {
  users: [],
};

export function registerUser(user: User): string {
  const userExists = mockDatabase.users.some((u) => u.email === user.email);

  if (userExists) {
    return "E-postadressen är redan registrerad.";
  }

  mockDatabase.users.push(user);
  return "Registrering lyckades!";
}

export function loginUser(email: string, password: string): string {
  const user = mockDatabase.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return "Fel e-postadress eller lösenord.";
  }

  return "Inloggning lyckades!";
}
