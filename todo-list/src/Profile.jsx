import React from "react";
import { Link } from "react-router-dom";
import profilePic from "./assets/pp.jpg";

export default function Profile() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen flex flex-col items-center p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-purple-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Ari Jaya Teguh</h2>
          <img
            src={profilePic}
            alt="Profile Picture"
            className="mt-4 w-32 h-32 rounded-full mb-4"
          />
          <p className="mt-2 text-center">
          My name is Ari Jaya Teguh, and I am a Computer Science student at Binus International University. 
          I enjoy playing FPS games like Valorant and Counter-Strike, 
          as well as watching anime, korean drama, and movies. My favorite anime is Tensei shitara Slime Datta Ken. 
          I currently live in Alam Sutera.
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
