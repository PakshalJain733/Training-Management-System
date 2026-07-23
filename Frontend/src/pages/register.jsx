import "../styles/register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/AcadNexus.png";

function Register() {
  const [role, setRole] = useState("Student");

  return (
    <div className="register-page">

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

      <div className="register-card">
        {/* Registration Form Content */}

        <img src={Logo} alt="AcadNexus Logo" className="logo" />

        <div id="brand-row">
          <h1 id="acad">Acad</h1>
          <h1 id="nexus">Nexus</h1>
        </div>

        <p className="subtitle">
          Create your account to get started.
        </p>

        <form>

          <div className="role-select-container">
            <label>Select Role</label>
            <select className="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option value="">Select your role</option>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Mentor">Mentor</option>
              <option value="HOD">HOD</option>
            </select>
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <input
                type="email"
                placeholder="user@pvppcoe.ac.in"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Secure Code — visible only for HOD */}
          <div className={`input-group secure-code-group ${role === "HOD" ? "secure-code-visible" : ""}`}>
            <label>Secure Code</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter HOD secure code"
              />
            </div>
          </div>
          <div className={`input-group secure-code-group ${role === "Faculty" ? "secure-code-visible" : ""}`}>
            <label>Secure Code</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter Faculty secure code"
              />
            </div>
          </div>
          <div className={`input-group secure-code-group ${role === "Mentor" ? "secure-code-visible" : ""}`}>
            <label>Secure Code</label>
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter Mentor secure code"
              />
            </div>
          </div>

          <button type="submit">
            Register
          </button>

          <div className="links">
            <p>
              Already have an account?
              <Link to="/"> Login</Link>
            </p>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;