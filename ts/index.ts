export interface User {
  id: number;
  nom: string;
  email: string;
  role?: 'admin' | 'user';
}

export function getAdmins(users: User[]): User[] {
  return users.filter((u) => u.role === 'admin');
}
