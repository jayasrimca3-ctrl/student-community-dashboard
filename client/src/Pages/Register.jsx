import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    skills: "",
    interests: "",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    const normalizedValue =
      name === "email"
        ? value.trim().toLowerCase()
        : value;

    setFormData((previous) => ({
      ...previous,
      [name]: normalizedValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            college: formData.college,
            course: formData.department,
            year: formData.year,
            skills: formData.skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
            interests: formData.interests
              .split(",")
              .map((interest) => interest.trim())
              .filter(Boolean),
            bio: formData.motivation,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Registration failed."
        );
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
      localStorage.setItem(
        "student",
        JSON.stringify(data.student)
      );

      setSuccess(
        "Registration successful! Redirecting to your dashboard..."
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setError(
        error.message ||
          "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <p className="register-label">
            STUDENT COMMUNITY
          </p>

          <h1>Create Your Student Account</h1>

          <p>
            Join the Student Community and connect with
            students, events, resources, and opportunities.
          </p>
        </div>

        {error && (
          <div className="form-message error-message">
            <span className="message-icon">!</span>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="form-message success-message">
            <span className="message-icon">✓</span>
            <span>{success}</span>
          </div>
        )}

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="form-section">
            <div className="section-heading">
              <span className="section-number">01</span>

              <div>
                <h2>Personal Information</h2>
                <p>
                  Tell us a little about yourself.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="college">
                  College <span>*</span>
                </label>

                <input
                  id="college"
                  name="college"
                  type="text"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-heading">
              <span className="section-number">02</span>

              <div>
                <h2>Academic Information</h2>
                <p>
                  Add your current academic details.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="department">
                  Department / Course <span>*</span>
                </label>

                <input
                  id="department"
                  name="department"
                  type="text"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Example: MCA, Computer Science"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="year">
                  Year <span>*</span>
                </label>

                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1st Year">
                    1st Year
                  </option>
                  <option value="2nd Year">
                    2nd Year
                  </option>
                  <option value="3rd Year">
                    3rd Year
                  </option>
                  <option value="4th Year">
                    4th Year
                  </option>
                  <option value="Final Year">
                    Final Year
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-heading">
              <span className="section-number">03</span>

              <div>
                <h2>Account Security</h2>
                <p>
                  Create a secure password for your account.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                  autoComplete="new-password"
                  minLength="6"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password <span>*</span>
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  minLength="6"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-heading">
              <span className="section-number">04</span>

              <div>
                <h2>Community Profile</h2>
                <p>
                  Help other students discover your skills
                  and interests.
                </p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="skills">
                Skills
              </label>

              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Example: Java, React, Python"
              />

              <small>
                Separate multiple skills with commas.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="interests">
                Interests
              </label>

              <input
                id="interests"
                name="interests"
                type="text"
                value={formData.interests}
                onChange={handleChange}
                placeholder="Example: Web Development, AI, Photography"
              />

              <small>
                Separate multiple interests with commas.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="motivation">
                About You
              </label>

              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Tell the community a little about yourself..."
                rows="5"
              />
            </div>
          </div>

          <button
            type="submit"
            className="register-submit-button"
            disabled={loading}
          >
            <span>
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </span>

            {!loading && (
              <span className="register-button-arrow">
                →
              </span>
            )}

            {loading && (
              <span
                className="register-spinner"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </form>

        <div className="register-login-link">
          <p>
            <span>Already have an account?</span>

            <button
              type="button"
              className="register-login-button"
              onClick={() => navigate("/login")}
            >
              <span>Login</span>
              <span className="login-button-arrow">
                →
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;