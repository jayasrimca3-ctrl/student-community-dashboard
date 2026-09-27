import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.name === "email"
        ? e.target.value.trim().toLowerCase()
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save authentication information
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Admin goes to Admin Dashboard
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        // Normal student goes to Student Dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message || "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      {/* Top Navigation */}
      <header className="auth-navbar">
        <Link to="/" className="logo">
          Student<span>Community</span>
        </Link>

        <Link to="/" className="auth-home-link">
          ← Back to Home
        </Link>
      </header>

      {/* Login Section */}
      <main className="auth-main">

        <div className="auth-card">

          {/* Header */}
          <div className="auth-header">

            <div className="auth-icon">
              🔐
            </div>

            <p className="auth-label">
              WELCOME BACK
            </p>

            <h1>
              Welcome Back
            </h1>

            <p>
              Login to your Student Community account.
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            {/* Password */}
            <div className="form-group">

              <div className="password-label-row">
                <label htmlFor="password">
                  Password
                </label>
              </div>

              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login →"}
            </button>

          </form>

          {/* Register */}
          <div className="auth-footer">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create an account
            </Link>

          </div>

        </div>

        {/* Side Information */}
        <div className="auth-side">

          <p className="auth-side-label">
            STUDENT COMMUNITY
          </p>

          <h2>
            Connect.
            <br />
            Learn.
            <br />
            <span>Grow Together.</span>
          </h2>

          <p>
            Access your student community, discover
            opportunities, participate in events and
            connect with other students.
          </p>

          <div className="auth-side-features">

            <div>
              <span>🤝</span>
              <div>
                <strong>Connect</strong>
                <p>Meet students and build connections.</p>
              </div>
            </div>

            <div>
              <span>📚</span>
              <div>
                <strong>Learn</strong>
                <p>Explore resources and learning opportunities.</p>
              </div>
            </div>

            <div>
              <span>🚀</span>
              <div>
                <strong>Grow</strong>
                <p>Develop your skills and discover opportunities.</p>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="auth-page-footer">
        <p>
          © 2026 Student Community. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Login;