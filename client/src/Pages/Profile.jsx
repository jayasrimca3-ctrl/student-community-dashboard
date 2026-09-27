import { Link } from "react-router-dom";

function Profile() {
  return (
    <div style={styles.page}>

      <header style={styles.header}>

        <Link to="/dashboard" style={styles.logo}>
          Student<span>Community</span>
        </Link>

        <Link to="/dashboard" style={styles.back}>
          ← Dashboard
        </Link>

      </header>

      <main style={styles.main}>

        <p style={styles.label}>
          MY PROFILE
        </p>

        <h1>Student Profile</h1>

        <div style={styles.card}>

          <div style={styles.avatar}>
            👤
          </div>

          <div>
            <h2>
              Your Student Profile
            </h2>

            <p>
              Your registered student information will
              appear here.
            </p>
          </div>

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
    maxWidth: "900px",
    margin: "0 auto",
    padding: "70px 7%",
  },

  label: {
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  card: {
    marginTop: "35px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "35px",
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#eef2ff",
    display: "grid",
    placeItems: "center",
    fontSize: "30px",
  },
};

export default Profile;