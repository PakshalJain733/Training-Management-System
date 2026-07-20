import { Link } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/AcadNexus.png";
import sideImage from "../assets/LoginSideImage.png";

function Login() {
  return (
    <div className="login-page">

      {/* Decorative Background Shapes */}
      <div className="bg-shape circle1"></div>
      <div className="bg-shape circle2"></div>
      <div className="bg-shape circle3"></div>
      <div className="bg-shape circle4"></div>
      <div className="bg-shape circle5"></div>
      <div className="bg-shape circle6"></div>
      <div className="bg-shape blob1"></div>
      <div className="bg-shape blob2"></div>
      <div className="bg-shape ring1"></div>
      <div className="bg-shape ring2"></div>

      <div className="login-wrapper">

        {/* Left Panel */}
        <div className="left-panel">
          <div className="left-content">
            <p className="welcome-text">Welcome to</p>
            <div className="brand-row">
              <h1 className="brand-name1">Acad</h1>
              <h1 className="brand-name2">Nexus</h1>
            </div>
            <p className="brand-tagline">
              Empowering Learning. Enhancing Future.
            </p>
          </div>
          <div className="side-image-wrapper">
            <img src={sideImage} alt="AcadNexus Learning" className="side-image" />
          </div>
        </div>

        {/* Right Panel - Login Card */}
        <div className="login-card">
          <img src={logo} alt="AcadNexus Logo" className="logo" />
          {/* <h2 className="card-title">AcadNEXUS</h2> */}
          <p className="subtitle">Welcome Back! Login to continue.</p>

          <form onSubmit={(e) => e.preventDefault()}>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="options">
              <label className="remember-label">
                <input type="checkbox" id="remember-me" />
                <span>Remember Me</span>
              </label>
              <Link id="forgot-password-link" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button id="butt" type="submit">Login</button>

            {/* Create Account */}
            <div className="links">
              <p>
                Don&apos;t have an account?{" "}
                <Link id="registeration-link" to="/register">
                  Create Account
                </Link>
              </p>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;