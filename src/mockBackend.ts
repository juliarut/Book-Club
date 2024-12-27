type User = {
  name: string;
  email: string;
  password: string;
};

type Comment = {
  user: string;
  text: string;
  timestamp: string;
};

const mockDatabase: {
  users: User[];
  comments: Comment[];
} = {
  users: [],
  comments: [],
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

export function addComment(user: string, text: string): Comment[] {
  const timestamp = new Date().toLocaleString();
  mockDatabase.comments.push({ user, text, timestamp });
  return mockDatabase.comments;
}

export function getComments(): Comment[] {
  return mockDatabase.comments;
}
