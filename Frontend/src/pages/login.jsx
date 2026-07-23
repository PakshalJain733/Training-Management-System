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
              <div className="input-icon-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="user@pvppcoe.ac.in"
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-icon-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
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