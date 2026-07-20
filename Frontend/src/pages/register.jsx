import "../styles/register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <h1>AcadNexus</h1>

        <p className="subtitle">
          Create your account to get started.
        </p>

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

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