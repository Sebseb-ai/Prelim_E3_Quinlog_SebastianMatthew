import React from "react";

const UserInfo = ({ name }) => {
  return (
    <div className="mt-3">
      <h4>User: {name}</h4>
    </div>
  );
};

export default UserInfo;
