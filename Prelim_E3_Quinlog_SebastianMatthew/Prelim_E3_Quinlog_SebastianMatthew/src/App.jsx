import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  const [user, setUser] = useState({ name: "John Doe", pictureUrl: "", settings: { darkMode: false } });

  return (
    <Router>
      <div className={`app-container ${user.settings.darkMode ? "dark-mode" : "light-mode"}`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <Link className="nav-link text-white" to="/profile">Profile</Link>
            <Link className="nav-link text-white" to="/settings">Settings</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
