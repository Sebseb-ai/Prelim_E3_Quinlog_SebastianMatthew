import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

const Profile = ({ user, setUser }) => {
  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <div className="container mt-4">
      <h2>Profile Page</h2>
      <ProfilePicture pictureUrl={user.pictureUrl} />
      <UserInfo name={user.name} />
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div>
    </div>
  );
};

export default Profile;
