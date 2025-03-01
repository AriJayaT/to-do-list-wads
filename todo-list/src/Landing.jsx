import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <Link
        to="/todo"
        className="mb-4 px-6 py-3 bg-purple-700 rounded hover:bg-purple-600 text-xl"
      >
        Go to To-Do List
      </Link>
      <Link
        to="/profile"
        className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 text-xl"
      >
        View Profile
      </Link>
    </div>
  );
}
