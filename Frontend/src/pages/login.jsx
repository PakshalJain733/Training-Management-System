import { Link } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/AcadNexus.png";
// import img from "../assets/LoginSideImage.png";

function Login() {
  return (
    <div className="login-page">
      <div id="circle1"></div>
      <div id="circle2"></div>
      <div id="circle3"></div>
      {/* <div className="left-panel">
        <img
          src={img}
          alt="AcadNexus"
          className="side-image"
        />
      </div> */}
      <div className="login-card">
        <img
          src={logo}
          alt="AcadNexus"
          className="logo"
        />
        <h1>AcadNexus</h1>

        <p className="subtitle">
          Welcome Back! Login to continue.
        </p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link id="forgot-password-link" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button id="butt" type="submit">
            Login
          </button>

          <div className="links">
            <p>
              Don't have an account?{" "}
              <Link id="registeration-link" to="/register">
                Create Account
              </Link>
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;