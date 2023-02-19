import React from 'react';

function Profile({ user }) {
  return (
    <div className="profile-container">
      <img
        className="profile-pic"
        src={user.profilePic}
        alt="user profile pic"
      />
      <h4 className="profile-username">{user.username}</h4>
    </div>
  );
}

export default Profile;
