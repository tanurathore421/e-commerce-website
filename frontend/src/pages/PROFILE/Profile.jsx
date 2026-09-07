import React from "react";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Ravi Sharma",
    email: "ravi@gmail.com",
    phone: "+91 98765 43210",
    address: "Bhopal, Madhya Pradesh, India",
  };

  const details = [
    ["Full Name", user.name],
    ["Email Address", user.email],
    ["Phone Number", user.phone],
    ["Address", user.address],
  ];

  const settings = [
    ["My Orders", "View and track your orders", "View"],
    ["Change Password", "Update your account password", "Change"],
    ["Logout", "Sign out from your account", "Logout"],
  ];

  return (
    <main className="profile-page">
      <section className="profile-container">
        <header className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your account information</p>
        </header>

        <section className="profile-card">
          <div className="profile-top">
            <span className="profile-avatar">{user.name[0]}</span>

            <h2>
              {user.name}
              <small>{user.email}</small>
            </h2>

            <button className="edit-btn">Edit Profile</button>
          </div>

          <div className="profile-details">
            {details.map(([label, value]) => (
              <p className="detail-box" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </p>
            ))}
          </div>
        </section>

        <section className="account-card">
          <h2>Account Settings</h2>

          {settings.map(([title, description, button]) => (
            <div className="setting-item" key={title}>
              <p>
                <strong>{title}</strong>
                <span>{description}</span>
              </p>

              <button className={button === "Logout" ? "logout-btn" : ""}>
                {button}
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Profile;
