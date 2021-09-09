const key = "@token";

export interface AuthDataType {
  token: string;
  email: string;
  id: number;
}

export function isAuthenticated(): boolean {
  const auth = localStorage.getItem(key);

  if (!auth) return false;

  return true;
}

export function getAuthData(): AuthDataType | null | any {
  const auth = localStorage.getItem(key);
  return auth || null;
}

export function saveAuthData(user: AuthDataType): void {
  localStorage.setItem(key, `${user.token}`);
}

export function removeAuthData(): void {
  localStorage.removeItem(key);
}
