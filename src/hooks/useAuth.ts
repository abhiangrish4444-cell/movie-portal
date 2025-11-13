import { useState } from "react";

interface User {
  name?: string;
  email: string;
  password: string;
  provider?: string;
}

const USERS_KEY = "mp_users";
const CURRENT_USER_KEY = "mp_current_user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null")
  );

  const register = (name: string, email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const existing = users.find((u) => u.email === email);
    if (existing) throw new Error("User already exists");

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid email or password");
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(found));
    setUser(found);
  };

  const socialLogin = (provider: string) => {
    const mockUser = {
      name: provider.toUpperCase() + " User",
      email: provider + "@mock.com",
      password: "",
      provider,
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  };

  return { user, register, login, socialLogin, logout };
}
