import React from "react";

const Settings = ({ user, setUser }) => {
  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: { ...user.settings, darkMode: !user.settings.darkMode }
    });
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Enable Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Settings;
