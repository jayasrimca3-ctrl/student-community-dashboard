import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../App.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function AdminDashboard() {
  const navigate = useNavigate();

  const [studentCount, setStudentCount] = useState(0);
  const [loadingStudents, setLoadingStudents] = useState(true);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `${API_URL}/api/students`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error(data.message);
          return;
        }

        setStudentCount(
          data.count || data.students?.length || 0
        );
      } catch (error) {
        console.error(
          "Unable to fetch registered students:",
          error
        );
      } finally {
        setLoadingStudents(false);
      }
    };

    fetchStudentCount();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("student");

    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage the Student Community</p>
        </div>

        <div className="admin-header-actions">
          <Link
            to="/"
            className="admin-back-btn"
          >
            ← Back
          </Link>

          <button
            type="button"
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="admin-content">
        <section className="admin-stats">
          <div className="admin-stat-card">
            <span className="admin-stat-icon">
              👨‍🎓
            </span>

            <div>
              <h3>Registered Students</h3>

              <strong>
                {loadingStudents
                  ? "..."
                  : studentCount}
              </strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <span className="admin-stat-icon">
              📅
            </span>

            <div>
              <h3>Events</h3>
              <strong>0</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <span className="admin-stat-icon">
              📚
            </span>

            <div>
              <h3>Resources</h3>
              <strong>0</strong>
            </div>
          </div>
        </section>

        <section className="admin-management">
          <div className="admin-section-heading">
            <p>ADMINISTRATION</p>
            <h2>Manage Community</h2>
          </div>

          <div className="admin-management-grid">
            <Link
              to="/admin/students"
              className="admin-management-card"
            >
              <div className="management-icon">
                👥
              </div>

              <div>
                <h3>Manage Students</h3>
                <p>
                  View and manage all registered students.
                </p>
              </div>

              <span className="management-arrow">
                →
              </span>
            </Link>

            <Link
              to="/events"
              className="admin-management-card"
            >
              <div className="management-icon">
                📅
              </div>

              <div>
                <h3>Manage Events</h3>
                <p>
                  View community events and activities.
                </p>
              </div>

              <span className="management-arrow">
                →
              </span>
            </Link>

            <Link
              to="/resources"
              className="admin-management-card"
            >
              <div className="management-icon">
                📚
              </div>

              <div>
                <h3>Manage Resources</h3>
                <p>
                  View learning resources shared with
                  students.
                </p>
              </div>

              <span className="management-arrow">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;