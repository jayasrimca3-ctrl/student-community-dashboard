import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function StudentDashboard() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `${API_URL}/api/students/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load your profile."
          );
        }

        setStudent(data.student);

        localStorage.setItem(
          "student",
          JSON.stringify(data.student)
        );
      } catch (error) {
        console.error("Student profile error:", error);
        setError(
          error.message ||
            "Unable to load your student profile."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudentProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("student");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="student-dashboard">
        <div className="student-dashboard-loading">
          <div className="dashboard-spinner"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="student-dashboard">
        <div className="student-dashboard-error">
          <h2>Unable to load dashboard</h2>
          <p>{error}</p>

          <div className="dashboard-error-actions">
            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>

            <button
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  const skills = student?.skills || [];
  const interests = student?.interests || [];

  return (
    <div className="student-dashboard">
      <header className="student-dashboard-header">
        <div className="student-dashboard-brand">
          <Link to="/" className="logo">
            Student<span>Community</span>
          </Link>
        </div>

        <nav className="student-dashboard-nav">
          <Link to="/dashboard" className="active">
            Dashboard
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/profile">
            My Profile
          </Link>

          <button
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="student-dashboard-content">
        <section className="student-welcome-section">
          <div>
            <p className="student-dashboard-label">
              STUDENT DASHBOARD
            </p>

            <h1>
              Welcome, {student?.name || "Student"} 👋
            </h1>

            <p>
              Manage your student profile, explore
              opportunities, and stay connected with
              the community.
            </p>
          </div>

          <div className="student-profile-summary">
            <div className="student-avatar">
              {student?.name
                ? student.name.charAt(0).toUpperCase()
                : "S"}
            </div>

            <div>
              <strong>
                {student?.name || "Student"}
              </strong>

              <span>
                {student?.email || ""}
              </span>
            </div>
          </div>
        </section>

        <section className="student-info-grid">
          <div className="student-info-card">
            <span className="student-info-icon">
              🎓
            </span>

            <div>
              <span>Course</span>
              <strong>
                {student?.course || "Not provided"}
              </strong>
            </div>
          </div>

          <div className="student-info-card">
            <span className="student-info-icon">
              📅
            </span>

            <div>
              <span>Academic Year</span>
              <strong>
                {student?.year || "Not provided"}
              </strong>
            </div>
          </div>

          <div className="student-info-card">
            <span className="student-info-icon">
              🏫
            </span>

            <div>
              <span>College</span>
              <strong>
                {student?.college || "Not provided"}
              </strong>
            </div>
          </div>

          <div className="student-info-card">
            <span className="student-info-icon">
              📱
            </span>

            <div>
              <span>Phone</span>
              <strong>
                {student?.phone || "Not provided"}
              </strong>
            </div>
          </div>
        </section>

        <section className="student-dashboard-grid">
          <div className="student-dashboard-card">
            <div className="student-card-heading">
              <div>
                <p>YOUR PROFILE</p>
                <h2>Skills</h2>
              </div>

              <span>💡</span>
            </div>

            {skills.length > 0 ? (
              <div className="student-tags">
                {skills.map((skill, index) => (
                  <span key={`${skill}-${index}`}>
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="student-empty-text">
                No skills added yet.
              </p>
            )}
          </div>

          <div className="student-dashboard-card">
            <div className="student-card-heading">
              <div>
                <p>YOUR PROFILE</p>
                <h2>Interests</h2>
              </div>

              <span>✨</span>
            </div>

            {interests.length > 0 ? (
              <div className="student-tags">
                {interests.map((interest, index) => (
                  <span
                    key={`${interest}-${index}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            ) : (
              <p className="student-empty-text">
                No interests added yet.
              </p>
            )}
          </div>
        </section>

        <section className="student-dashboard-actions">
          <Link
            to="/profile"
            className="student-action-card"
          >
            <span>👤</span>

            <div>
              <h3>My Profile</h3>
              <p>
                View and manage your student profile.
              </p>
            </div>

            <strong>→</strong>
          </Link>

          <Link
            to="/events"
            className="student-action-card"
          >
            <span>📅</span>

            <div>
              <h3>Explore Events</h3>
              <p>
                Discover upcoming community events.
              </p>
            </div>

            <strong>→</strong>
          </Link>

          <Link
            to="/resources"
            className="student-action-card"
          >
            <span>📚</span>

            <div>
              <h3>Learning Resources</h3>
              <p>
                Explore resources to develop your skills.
              </p>
            </div>

            <strong>→</strong>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default StudentDashboard;