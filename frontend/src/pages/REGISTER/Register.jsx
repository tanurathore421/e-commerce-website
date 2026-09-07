import  { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // connect to backend api
    try{
      const response= await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(response.data.message || "Registration successful!");

         window.location.href="/"

      //clear input fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    }catch(error){
      alert(error.response.data.message || "Registration failed");
    }
  
  };

  return (
    <div className="register-page">
      <div className="register-box">

        <div className="register-logo">
          Shop<span>Easy</span>
        </div>

        <h2>Create Account</h2>
        <p className="register-subtitle">
          Create your account to start shopping
        </p>

        <form onSubmit={handleRegister}>

          <div className="register-input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <label className="terms">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

          <button type="submit">Create Account</button>

        </form>

        <p className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;