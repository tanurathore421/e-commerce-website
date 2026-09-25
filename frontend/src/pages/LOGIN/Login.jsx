import { useState ,useEffect} from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const[captchaImage, setCaptchaImage] = useState("");

  //get captcha from backend
  const getCaptcha=async()=>{
    try{
      const response = await axios.get("http://localhost:3000/api/captcha/captcha",
        {
          withCredentials: true
        }
      );
      setCaptchaImage(response.data.captcha);

    }catch(error){
      console.log("CAPTCHA ERROR:", error);
  }
  };

  useEffect(() => {
    getCaptcha();
  },[]);


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password || !captcha) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
          captcha,
        },
          {
                withCredentials: true
            }
      );

      const token = response.data.token;

      if (!token) {
        alert("Token not received from backend");
        return;
      }

      localStorage.setItem("token", token);

      navigate("/profile");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("SERVER RESPONSE:", error.response?.data);

      alert(error.response?.data?.message || "Login failed");

      // Refresh captcha after failed login
      getCaptcha();
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

        {/*captcha section*/}
     <div className="captcha-group">
  <div className="captcha-box">
    <span>{captchaImage}</span>
  </div>

  <button
    type="button"
    className="captcha-refresh"
    onClick={getCaptcha}
  >
    ↻
  </button>

  <input
    type="text"
    placeholder="Enter CAPTCHA"
    value={captcha}
    onChange={(e) => setCaptcha(e.target.value)}
  />
</div>

          <div className="options">
            <label>
              Remember me
              <input type="checkbox" />
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don't have an account?
          <br />
          <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
