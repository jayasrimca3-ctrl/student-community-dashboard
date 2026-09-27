import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const API_URL = "http://localhost:5000";

function StudentDashboard() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/students/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load profile."
          );
        }

        setStudent(data.student);

        localStorage.setItem(
          "student",
          JSON.stringify(data.student)
        );
      } catch (error) {
        console.error(error);

        setError(
          error.message || "Unable to load your profile."
        );

        if (
          error.message?.toLowerCase().includes("token") ||
          error.message?.toLowerCase().includes("authorized")
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("student");

          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("student");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <h2>Loading your dashboard...</h2>
        <p>Fetching your profile information.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <div className="error-card">
          <div className="error-icon">!</div>
          <h2>Unable to load dashboard</h2>
          <p>{error}</p>

          <button
            onClick={() => navigate("/login")}
            className="primary-btn"
          >
            Login Again
          </button>
        </div>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  const firstName =
    student.name?.split(" ")[0] || "Student";

  return (
    <div className="student-dashboard">

      {/* ================= HEADER ================= */}
      <header className="dashboard-header">

        <div className="dashboard-header-inner">

          <NavLink to="/" className="dashboard-logo">
            <div className="logo-mark">SC</div>

            <div>
              <span className="logo-title">
                Student Community
              </span>

              <span className="logo-subtitle">
                Learn • Connect • Grow
              </span>
            </div>
          </NavLink>

          <nav className="dashboard-nav">

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Resources
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </NavLink>

          </nav>

          <div className="dashboard-user">

            <div className="user-avatar">
              {firstName.charAt(0).toUpperCase()}
            </div>

            <div className="user-name">
              {student.name}
            </div>

            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}
      <main className="dashboard-main">

        {/* Welcome Banner */}
        <section className="welcome-banner">

          <div className="welcome-content">

            <span className="welcome-label">
              STUDENT DASHBOARD
            </span>

            <h1>
              Welcome, {firstName}! 👋
            </h1>

            <p>
              Stay connected, discover opportunities,
              and grow with your student community.
            </p>

          </div>

          <div className="welcome-decoration">
            <span>🎓</span>
          </div>

        </section>

        {/* Quick Stats */}
        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              🎓
            </div>

            <div>
              <span className="stat-label">
                Course
              </span>

              <strong>
                {student.course}
              </strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              📚
            </div>

            <div>
              <span className="stat-label">
                Academic Year
              </span>

              <strong>
                {student.year}
              </strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              🛠️
            </div>

            <div>
              <span className="stat-label">
                Skills
              </span>

              <strong>
                {student.skills?.length || 0}
              </strong>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              ❤️
            </div>

            <div>
              <span className="stat-label">
                Interests
              </span>

              <strong>
                {student.interests?.length || 0}
              </strong>
            </div>

          </div>

        </section>

        {/* Main Grid */}
        <section className="dashboard-content-grid">

          {/* Profile */}
          <div className="dashboard-card profile-card">

            <div className="card-header">

              <div>
                <span className="section-kicker">
                  PERSONAL INFORMATION
                </span>

                <h2>My Profile</h2>
              </div>

              <button
                onClick={() => navigate("/profile")}
                className="text-btn"
              >
                Edit Profile →
              </button>

            </div>

            <div className="profile-top">

              <div className="large-avatar">
                {firstName.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3>{student.name}</h3>

                <p>
                  {student.course} • {student.year}
                </p>

                <span className="active-status">
                  <span></span>
                  Active Student
                </span>
              </div>

            </div>

            <div className="profile-details">

              <div className="detail-item">
                <span className="detail-icon">
                  ✉️
                </span>

                <div>
                  <small>Email</small>
                  <p>{student.email}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">
                  📱
                </span>

                <div>
                  <small>Phone</small>
                  <p>{student.phone}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">
                  🏫
                </span>

                <div>
                  <small>College</small>
                  <p>{student.college}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">
                  🎓
                </span>

                <div>
                  <small>Course</small>
                  <p>{student.course}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Skills */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <span className="section-kicker">
                  WHAT I KNOW
                </span>

                <h2>My Skills</h2>
              </div>

              <span className="count-badge">
                {student.skills?.length || 0}
              </span>

            </div>

            {student.skills?.length > 0 ? (
              <div className="tag-list">

                {student.skills.map(
                  (skill, index) => (
                    <span
                      className="skill-tag"
                      key={index}
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>
            ) : (
              <div className="empty-state">
                <span>🛠️</span>
                <p>
                  No skills added yet.
                </p>
              </div>
            )}

          </div>

          {/* Interests */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <span className="section-kicker">
                  WHAT I LOVE
                </span>

                <h2>My Interests</h2>
              </div>

              <span className="count-badge">
                {student.interests?.length || 0}
              </span>

            </div>

            {student.interests?.length > 0 ? (
              <div className="tag-list">

                {student.interests.map(
                  (interest, index) => (
                    <span
                      className="interest-tag"
                      key={index}
                    >
                      {interest}
                    </span>
                  )
                )}

              </div>
            ) : (
              <div className="empty-state">
                <span>❤️</span>
                <p>
                  No interests added yet.
                </p>
              </div>
            )}

          </div>

        </section>

        {/* Community Actions */}
        <section className="community-section">

          <div className="section-heading">

            <div>
              <span className="section-kicker">
                EXPLORE
              </span>

              <h2>Make the most of your community</h2>

              <p>
                Discover events, learning materials,
                and opportunities around you.
              </p>
            </div>

          </div>

          <div className="community-grid">

            <button
              className="community-card"
              onClick={() => navigate("/events")}
            >
              <div className="community-icon events-icon">
                📅
              </div>

              <div>
                <h3>Events</h3>

                <p>
                  Discover workshops, meetups,
                  seminars and student activities.
                </p>

                <span>
                  Explore Events →
                </span>
              </div>
            </button>

            <button
              className="community-card"
              onClick={() => navigate("/resources")}
            >
              <div className="community-icon resources-icon">
                📚
              </div>

              <div>
                <h3>Resources</h3>

                <p>
                  Find study materials, guides,
                  courses and useful resources.
                </p>

                <span>
                  Browse Resources →
                </span>
              </div>
            </button>

            <button
              className="community-card"
              onClick={() => navigate("/profile")}
            >
              <div className="community-icon profile-icon">
                👤
              </div>

              <div>
                <h3>My Profile</h3>

                <p>
                  View and update your student
                  community profile.
                </p>

                <span>
                  View Profile →
                </span>
              </div>
            </button>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="dashboard-footer">

        <div>
          <strong>
            Student Community
          </strong>

          <p>
            Learn • Connect • Grow
          </p>
        </div>

        <p>
          © 2026 Student Community. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default StudentDashboard;