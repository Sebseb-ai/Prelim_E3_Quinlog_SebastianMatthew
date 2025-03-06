import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePicture = ({ pictureUrl }) => {
  return (
    <div className="w-24 h-24 rounded-circle bg-secondary d-flex align-items-center justify-content-center">
      {pictureUrl ? <img src={pictureUrl} alt="Profile" className="w-100 h-100 rounded-circle" /> : <span className="fs-1">👤</span>}
    </div>
  );
};

const UserInfo = ({ name }) => {
  return <h3 className="mt-3">{name}</h3>;
};

const Profile = ({ user, setUser }) => {
  return (
    <div className="container text-center mt-5">
      <ProfilePicture pictureUrl={user.pictureUrl} />
      <UserInfo name={user.name} />
      <input
        type="text"
        className="form-control mt-3"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  );
};

const Settings = ({ user, setUser }) => {
  return (
    <div className="container text-center mt-5">
      <h2>Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={user.settings.darkMode}
          onChange={() => setUser({ ...user, settings: { darkMode: !user.settings.darkMode } })}
        />
        <label className="form-check-label ms-2">Dark Mode</label>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the User Profile App</h1>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState({ name: "John Doe", pictureUrl: "", settings: { darkMode: false } });

  return (
    <Router>
      <div className={`min-vh-100 ${user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary p-3">
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
