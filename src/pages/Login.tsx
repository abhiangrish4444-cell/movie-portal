import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUsers, setCurrentUser } from "../utils/localStorage";

function loginUser(email, password) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error("Invalid credentials!");
  }
  setCurrentUser(user);
}


export default function Login() {
  const { login, socialLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>

        <div className="mt-6">
          <p className="text-center text-sm mb-3 text-gray-500">
            Or continue with
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                socialLogin("google");
                navigate("/");
              }}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Google
            </button>
            <button
              onClick={() => {
                socialLogin("facebook");
                navigate("/");
              }}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Facebook
            </button>
            <button
              onClick={() => {
                socialLogin("apple");
                navigate("/");
              }}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
