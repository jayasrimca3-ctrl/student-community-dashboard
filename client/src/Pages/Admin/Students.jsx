import { Link } from "react-router-dom";

function Students() {
  return (
    <div style={styles.page}>

      <header style={styles.header}>

        <Link to="/admin" style={styles.logo}>
          Student<span>Community</span>
        </Link>

        <Link to="/admin" style={styles.back}>
          ← Admin Dashboard
        </Link>

      </header>

      <main style={styles.main}>

        <div style={styles.heading}>

          <div>
            <p style={styles.label}>
              ADMINISTRATION
            </p>

            <h1>
              Registered Students
            </h1>

            <p style={styles.description}>
              View and manage student registration responses.
            </p>
          </div>

          <span style={styles.count}>
            0 Students
          </span>

        </div>

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Department</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td colSpan="6" style={styles.empty}>
                  No students registered yet.
                </td>
              </tr>

            </tbody>

          </table>

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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "65px 7%",
  },

  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "35px",
  },

  label: {
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  description: {
    color: "#64748b",
  },

  count: {
    background: "#eef2ff",
    color: "#4f46e5",
    padding: "10px 15px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
  },

  tableContainer: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    overflow: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "800px",
  },

  empty: {
    textAlign: "center",
    padding: "60px",
    color: "#64748b",
  },
};

export default Students;