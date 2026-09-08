import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  // Get user profile
  useEffect(() => {

    const getProfile = async () => {

      try {

        // Get token from localStorage
        const token = localStorage.getItem("token");

        // If no token, go to login
        if (!token) {
          navigate("/login");
          return;
        }

        // Send token to backend
        const response = await axios.get(
          "http://localhost:3000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(
          "Profile data:",
          response.data
        );

        // Store user data
        setUser(response.data);

      } catch (error) {

        console.log("Profile error:", error);

        // Remove invalid token
        localStorage.removeItem("token");

        // Go to login
        navigate("/login");

      } finally {
        setLoading(false);
      }
    };

    getProfile();

  }, [navigate]);


  // Logout
  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };


  // Loading screen
  if (loading) {
    return (
      <h2>Loading profile...</h2>
    );
  }


  // If user not found
  if (!user) {
    return (
      <h2>User not found</h2>
    );
  }


  const details = [
    ["Full Name", user.name],
    ["Email Address", user.email],
    ["Phone Number", user.phone],
    ["Address", user.address],
  ];


  const settings = [
    [
      "My Orders",
      "View and track your orders",
      "View",
    ],
    [
      "Change Password",
      "Update your account password",
      "Change",
    ],
    [
      "Logout",
      "Sign out from your account",
      "Logout",
    ],
  ];


  return (
    <main className="profile-page">

      <section className="profile-container">

        <header className="profile-header">

          <h1>
            My Profile
          </h1>

          <p>
            Manage your account information
          </p>

        </header>


        <section className="profile-card">

          <div className="profile-top">

            <span className="profile-avatar">
              {user.name
                .charAt(0)
                .toUpperCase()}
            </span>


            <h2>

              {user.name}

              <small>
                {user.email}
              </small>

            </h2>


            <button className="edit-btn">
              Edit Profile
            </button>

          </div>


          <div className="profile-details">

            {details.map(
              ([label, value]) => (

                <p
                  className="detail-box"
                  key={label}
                >

                  <span>
                    {label}
                  </span>

                  <strong>
                    {value}
                  </strong>

                </p>

              )
            )}

          </div>

        </section>


        <section className="account-card">

          <h2>
            Account Settings
          </h2>


          {settings.map(
            ([title, description, button]) => (

              <div
                className="setting-item"
                key={title}
              >

                <p>

                  <strong>
                    {title}
                  </strong>

                  <span>
                    {description}
                  </span>

                </p>


                <button
                  className={
                    button === "Logout"
                      ? "logout-btn"
                      : ""
                  }
                  onClick={
                    button === "Logout"
                      ? handleLogout
                      : undefined
                  }
                >

                  {button}

                </button>

              </div>

            )
          )}

        </section>

      </section>

    </main>
  );
}

export default Profile;


/* import React from "react";
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
 */