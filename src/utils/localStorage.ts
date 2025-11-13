// src/utils/localStorage.ts

export interface User {
  name: string;
  email: string;
  password: string;
}

// ---- Helper functions for localStorage ----

// Save all registered users
export function saveUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Get all registered users
export function getUsers(): User[] {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Save the currently logged-in user
export function setCurrentUser(user: User) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// Get the currently logged-in user
export function getCurrentUser(): User | null {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

// Remove the logged-in user (logout)
export function removeCurrentUser() {
  localStorage.removeItem("currentUser");
}
