import { Link } from "react-router-dom";

const events = [
  {
    category: "WORKSHOP",
    title: "Full Stack Development Workshop",
    description:
      "Learn how modern web applications are built with React, Node.js, and MongoDB through guided hands-on sessions.",
    date: "12 Sep 2026",
    time: "10:00 AM",
    venue: "Innovation Lab",
    accent: "#4f46e5",
  },
  {
    category: "COMMUNITY",
    title: "Student Networking Meetup",
    description:
      "Meet peers, exchange ideas, and grow your circle with conversations designed to spark collaboration and confidence.",
    date: "20 Sep 2026",
    time: "2:30 PM",
    venue: "Campus Lounge",
    accent: "#0ea5e9",
  },
  {
    category: "CAREER",
    title: "Career Development Session",
    description:
      "Get practical guidance on internships, resume writing, and personal branding to prepare for your next opportunity.",
    date: "28 Sep 2026",
    time: "11:00 AM",
    venue: "Career Center",
    accent: "#10b981",
  },
];

const highlights = [
  { icon: "🎯", title: "Career Growth", text: "Build practical skills and confidence for your next step." },
  { icon: "🤝", title: "Meaningful Connections", text: "Meet students, mentors, and like-minded peers." },
  { icon: "🚀", title: "Real Opportunities", text: "Discover events that open doors to learning and leadership." },
];

function Events() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          Student<span>Community</span>
        </Link>

        <div style={styles.headerActions}>
          <Link to="/" style={styles.secondaryLink}>Home</Link>
          <Link to="/register" style={styles.primaryButton}>Join Us</Link>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.heroSection}>
          <div>
            <p style={styles.label}>COMMUNITY EVENTS</p>
            <h1 style={styles.title}>Explore what’s happening this month</h1>
            <p style={styles.description}>
              Discover workshops, networking opportunities, and career-building experiences designed to help students connect, learn, and grow.
            </p>

            <div style={styles.quickStats}>
              <div style={styles.statCard}>
                <strong style={styles.statCardStrong}>12+</strong>
                <span style={styles.statCardSpan}>Sessions</span>
              </div>
              <div style={styles.statCard}>
                <strong style={styles.statCardStrong}>450+</strong>
                <span style={styles.statCardSpan}>Students</span>
              </div>
              <div style={styles.statCard}>
                <strong style={styles.statCardStrong}>8</strong>
                <span style={styles.statCardSpan}>Partners</span>
              </div>
            </div>
          </div>

          <div style={styles.featurePanel}>
            <div style={styles.featureBadge}>Featured</div>
            <h2 style={styles.featureTitle}>Build your network. Grow your future.</h2>
            <p style={styles.featureText}>
              From technical workshops to career conversations, every session is created to help students learn and connect in meaningful ways.
            </p>
            <ul style={styles.featureList}>
              <li>Hands-on learning experiences</li>
              <li>Mentor and peer engagement</li>
              <li>Leadership and skill growth</li>
            </ul>
          </div>
        </section>

        <section style={styles.highlightsSection}>
          {highlights.map((item) => (
            <div key={item.title} style={styles.highlightCard}>
              <div style={styles.iconWrap}>{item.icon}</div>
              <h3 style={styles.highlightTitle}>{item.title}</h3>
              <p style={styles.highlightText}>{item.text}</p>
            </div>
          ))}
        </section>

        <section style={styles.eventsSection}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.label}>UPCOMING</p>
              <h2 style={styles.sectionTitle}>Featured events</h2>
            </div>
            <button style={styles.filterButton}>Filter by Category</button>
          </div>

          <div style={styles.grid}>
            {events.map((event) => (
              <article key={event.title} style={styles.card}>
                <div style={{ ...styles.badge, background: `${event.accent}14`, color: event.accent }}>
                  {event.category}
                </div>

                <h3 style={styles.cardTitle}>{event.title}</h3>
                <p style={styles.cardDescription}>{event.description}</p>

                <div style={styles.metaList}>
                  <div style={styles.metaItem}><span style={styles.metaLabel}>Date</span><strong>{event.date}</strong></div>
                  <div style={styles.metaItem}><span style={styles.metaLabel}>Time</span><strong>{event.time}</strong></div>
                  <div style={styles.metaItem}><span style={styles.metaLabel}>Venue</span><strong>{event.venue}</strong></div>
                </div>

                <button style={{ ...styles.actionButton, background: event.accent }}>
                  Reserve a Spot
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
    color: "#0f172a",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  header: {
    height: "76px",
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e2e8f0",
    padding: "0 7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logo: {
    color: "#0f172a",
    textDecoration: "none",
    fontSize: "21px",
    fontWeight: "800",
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  secondaryLink: {
    color: "#475569",
    textDecoration: "none",
    fontWeight: "600",
  },

  primaryButton: {
    textDecoration: "none",
    background: "#4f46e5",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "14px",
  },

  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 7% 90px",
  },

  heroSection: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "28px",
    alignItems: "stretch",
    marginBottom: "32px",
  },

  label: {
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    margin: "0 0 16px",
  },

  title: {
    margin: 0,
    fontSize: "clamp(36px, 5vw, 60px)",
    lineHeight: "1.05",
    letterSpacing: "-2px",
  },

  description: {
    color: "#64748b",
    maxWidth: "620px",
    lineHeight: "1.75",
    fontSize: "17px",
    margin: "20px 0 0",
  },

  quickStats: {
    display: "flex",
    gap: "18px",
    marginTop: "32px",
    flexWrap: "wrap",
  },

  statCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "18px 20px",
    minWidth: "120px",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  statCardStrong: {
    color: "#0f172a",
    fontSize: "26px",
  },

  statCardSpan: {
    color: "#64748b",
    fontSize: "12px",
  },

  featurePanel: {
    background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
    borderRadius: "24px",
    padding: "30px 26px",
    color: "#ffffff",
    boxShadow: "0 25px 60px rgba(15, 23, 42, 0.12)",
  },

  featureBadge: {
    display: "inline-block",
    background: "rgba(99, 102, 241, 0.18)",
    color: "#c7d2fe",
    padding: "7px 12px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "20px",
  },

  featureTitle: {
    margin: "0 0 14px",
    fontSize: "28px",
    lineHeight: "1.2",
  },

  featureText: {
    color: "rgba(226, 232, 240, 0.8)",
    lineHeight: "1.7",
    margin: 0,
  },

  featureList: {
    margin: "22px 0 0",
    paddingLeft: "18px",
    color: "#e2e8f0",
    lineHeight: "2",
  },

  highlightsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    margin: "28px 0 48px",
  },

  highlightCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "24px 22px",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
  },

  iconWrap: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#eef2ff",
    display: "grid",
    placeItems: "center",
    fontSize: "24px",
    marginBottom: "18px",
  },

  highlightTitle: {
    margin: "0 0 10px",
    fontSize: "20px",
  },

  highlightText: {
    margin: 0,
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  eventsSection: {
    marginTop: "14px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "26px",
  },

  sectionTitle: {
    margin: "8px 0 0",
    fontSize: "32px",
    letterSpacing: "-1.2px",
  },

  filterButton: {
    background: "#ffffff",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    color: "#334155",
    padding: "11px 16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "24px",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "24px 22px 20px",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
    display: "flex",
    flexDirection: "column",
  },

  badge: {
    display: "inline-flex",
    width: "fit-content",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.2px",
  },

  cardTitle: {
    margin: "18px 0 12px",
    fontSize: "24px",
    lineHeight: "1.3",
  },

  cardDescription: {
    margin: 0,
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "15px",
  },

  metaList: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  metaItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    fontSize: "14px",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "12px",
  },

  metaLabel: {
    color: "#64748b",
  },

  actionButton: {
    marginTop: "22px",
    border: "none",
    borderRadius: "12px",
    color: "#ffffff",
    padding: "12px 16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 24px rgba(79, 70, 229, 0.18)",
  },
};

export default Events;