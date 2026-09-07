import  { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    // connect to backend api
    try{
      const response=await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password
        }
      );

      alert(response.data.message || "Login successful!");

            navigate("/profile");

      //clear input fields
      setEmail("");
      setPassword("");

        }catch(error){
        alert(error.response?.data?.message ||
              error.message ||
             "Login failed");
    }

  };

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="logo">
          Shop<span>Easy</span>
        </div>

        <h2>Welcome Back!</h2>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label>
                 Remember me<input type="checkbox" />
           
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don't have an account?<br/>
          <a href="/register"> Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default Login;