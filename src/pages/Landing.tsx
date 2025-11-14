// src/pages/Home.tsx

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Movie Portal</h1>
        <p className="text-gray-600 mb-6">Your place to manage and discover movies.</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
