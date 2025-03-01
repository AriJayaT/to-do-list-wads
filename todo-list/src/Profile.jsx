import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen flex flex-col items-center p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-purple-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold">Ari Jaya Teguh</h2>
          <p className="mt-2 text-center">
            A short bio goes here. I am passionate about building awesome web
            applications and love to code!
          </p>
        </div>
      </div>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-xl"
      >
        Back to Landing
      </Link>
    </div>
  );
}
