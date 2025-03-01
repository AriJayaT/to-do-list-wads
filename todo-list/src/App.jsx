import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Todo from "./Todo";
import Profile from "./Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
