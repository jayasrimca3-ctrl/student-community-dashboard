import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
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
      <header className="auth-navbar">
        <Link to="/" className="logo">
          Student<span>Community</span>
        </Link>

        <Link to="/" className="auth-home-link">
          ← Back to Home
        </Link>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">🔐</div>

            <p className="auth-label">WELCOME BACK</p>

            <h1>Welcome Back</h1>

            <p>
              Login to your Student Community account.
            </p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >
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
                autoComplete="email"
                required
              />
            </div>

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
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          <div className="auth-footer">
            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create an account
            </Link>
          </div>
        </div>

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
                <p>
                  Meet students and build connections.
                </p>
              </div>
            </div>

            <div>
              <span>📚</span>

              <div>
                <strong>Learn</strong>
                <p>
                  Explore resources and learning
                  opportunities.
                </p>
              </div>
            </div>

            <div>
              <span>🚀</span>

              <div>
                <strong>Grow</strong>
                <p>
                  Develop your skills and discover
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="auth-page-footer">
        <p>
          © 2026 Student Community. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;