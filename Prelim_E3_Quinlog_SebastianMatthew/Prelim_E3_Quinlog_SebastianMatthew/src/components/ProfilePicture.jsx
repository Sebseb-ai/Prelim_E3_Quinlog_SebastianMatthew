import React from "react";

const ProfilePicture = ({ pictureUrl }) => {
  return (
    <div className="text-center mt-3">
      <img
        src={pictureUrl || "https://via.placeholder.com/100"}
        alt="Profile"
        className="rounded-circle"
        width="100"
        height="100"
      />
    </div>
  );
};

export default ProfilePicture;
