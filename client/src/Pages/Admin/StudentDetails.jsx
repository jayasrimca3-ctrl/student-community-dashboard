import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <div style={styles.page}>

      <header style={styles.header}>

        <Link to="/admin" style={styles.logo}>
          Student<span>Community</span>
        </Link>

        <Link
          to="/admin/students"
          style={styles.back}
        >
          ← Students
        </Link>

      </header>

      <main style={styles.main}>

        <p style={styles.label}>
          STUDENT REGISTRATION
        </p>

        <h1>
          Student Details
        </h1>

        <p style={styles.id}>
          Registration ID: {id}
        </p>

        <div style={styles.card}>

          <h2>
            Student Information
          </h2>

          <div style={styles.grid}>

            <div>
              <span>Full Name</span>
              <strong>Not available yet</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>Not available yet</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>Not available yet</strong>
            </div>

            <div>
              <span>College</span>
              <strong>Not available yet</strong>
            </div>

            <div>
              <span>Department</span>
              <strong>Not available yet</strong>
            </div>

            <div>
              <span>Year</span>
              <strong>Not available yet</strong>
            </div>

          </div>

          <hr />

          <h2>
            Skills & Interests
          </h2>

          <p>
            Student response will appear here after
            connecting MongoDB.
          </p>

          <h2>
            Motivation
          </h2>

          <p>
            Student's complete response will appear here.
          </p>

        </div>

      </main>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
  },

  header: {
    height: "76px",
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    padding: "0 7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    color: "#0f172a",
    textDecoration: "none",
    fontSize: "21px",
    fontWeight: "800",
  },

  back: {
    color: "#4f46e5",
    textDecoration: "none",
  },

  main: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "65px 7%",
  },

  label: {
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  id: {
    color: "#64748b",
    fontSize: "14px",
  },

  card: {
    marginTop: "35px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "35px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    marginTop: "25px",
    marginBottom: "30px",
  },
};

export default StudentDetails;