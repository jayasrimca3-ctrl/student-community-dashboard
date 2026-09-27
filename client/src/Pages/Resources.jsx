import { Link } from "react-router-dom";

function Resources() {
  const resources = [
    {
      icon: "💻",
      category: "DEVELOPMENT",
      title: "Full Stack Development",
      description:
        "Learn frontend and backend development with practical guidance on React, Node.js, Express and MongoDB.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: "📚",
      category: "LEARNING",
      title: "Programming & Computer Science",
      description:
        "Build strong fundamentals in programming, data structures, algorithms and essential computer science concepts.",
      tags: ["Programming", "DSA", "Algorithms"],
    },
    {
      icon: "🚀",
      category: "CAREER",
      title: "Career Preparation",
      description:
        "Prepare for internships and job opportunities with resources for resumes, interviews, portfolios and professional skills.",
      tags: ["Resume", "Interview", "Career"],
    },
    {
      icon: "🎨",
      category: "DESIGN",
      title: "UI/UX Design",
      description:
        "Explore user interface and experience design principles to create simple, accessible and engaging digital products.",
      tags: ["UI Design", "UX", "Figma"],
    },
    {
      icon: "☁️",
      category: "TECHNOLOGY",
      title: "Cloud & DevOps",
      description:
        "Understand modern deployment workflows, cloud platforms, Git, CI/CD and essential DevOps practices.",
      tags: ["Cloud", "Git", "DevOps"],
    },
    {
      icon: "🤖",
      category: "EMERGING TECH",
      title: "AI & Emerging Technologies",
      description:
        "Discover artificial intelligence, machine learning and other technologies shaping the future of software development.",
      tags: ["AI", "ML", "Innovation"],
    },
  ];

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          Student<span>Community</span>
        </Link>

        <Link to="/" style={styles.backLink}>
          ← Back to Home
        </Link>
      </header>

      {/* Hero */}
      <main>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.label}>LEARNING HUB</p>

            <h1 style={styles.heading}>
              Resources for Your
              <span style={styles.headingAccent}> Growth</span>
            </h1>

            <p style={styles.description}>
              Explore curated learning resources designed to help students
              build technical skills, prepare for careers and discover new
              opportunities.
            </p>
          </div>

          <div style={styles.heroCard}>
            <div style={styles.heroIcon}>📚</div>

            <div>
              <strong style={styles.heroCardTitle}>
                Learn. Build. Grow.
              </strong>

              <p style={styles.heroCardText}>
                Practical resources for every stage of your student journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section style={styles.resourcesSection}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionLabel}>EXPLORE</p>

              <h2 style={styles.sectionTitle}>
                Learning Resources
              </h2>
            </div>

            <p style={styles.sectionDescription}>
              Find resources across technology, development, career and
              professional growth.
            </p>
          </div>

          <div style={styles.grid}>
            {resources.map((resource, index) => (
              <article style={styles.card} key={index}>
                <div style={styles.cardTop}>
                  <div style={styles.resourceIcon}>
                    {resource.icon}
                  </div>

                  <span style={styles.badge}>
                    {resource.category}
                  </span>
                </div>

                <h3 style={styles.cardTitle}>
                  {resource.title}
                </h3>

                <p style={styles.cardDescription}>
                  {resource.description}
                </p>

                <div style={styles.tags}>
                  {resource.tags.map((tag, tagIndex) => (
                    <span style={styles.tag} key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  style={styles.exploreButton}
                  onClick={() =>
                    alert(`${resource.title} resources coming soon.`)
                  }
                >
                  Explore Resources
                  <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <div>
            <p style={styles.ctaLabel}>KEEP LEARNING</p>

            <h2 style={styles.ctaTitle}>
              Your next opportunity
              <br />
              could start here.
            </h2>

            <p style={styles.ctaText}>
              Continue learning, develop practical skills and connect with
              other students in the community.
            </p>
          </div>

          <Link to="/dashboard" style={styles.ctaButton}>
            Go to Dashboard →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          © 2026 Student Community. All rights reserved.
        </p>

        <Link to="/" style={styles.footerLink}>
          StudentCommunity
        </Link>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#0f172a",
  },

  header: {
    height: "76px",
    background: "#ffffff",
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
    letterSpacing: "-0.5px",
  },

  backLink: {
    color: "#475569",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    transition: "0.2s",
  },

  hero: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "85px 7% 65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
  },

  heroContent: {
    maxWidth: "700px",
  },

  label: {
    color: "#4f46e5",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "2.5px",
    marginBottom: "18px",
  },

  heading: {
    margin: 0,
    fontSize: "clamp(38px, 5vw, 64px)",
    lineHeight: "1.08",
    letterSpacing: "-2.5px",
    fontWeight: "800",
  },

  headingAccent: {
    color: "#4f46e5",
  },

  description: {
    marginTop: "25px",
    maxWidth: "650px",
    color: "#64748b",
    fontSize: "17px",
    lineHeight: "1.8",
  },

  heroCard: {
    minWidth: "285px",
    maxWidth: "320px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "28px",
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    boxShadow: "0 15px 40px rgba(15, 23, 42, 0.06)",
  },

  heroIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "15px",
    background: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    flexShrink: 0,
  },

  heroCardTitle: {
    display: "block",
    fontSize: "16px",
    marginBottom: "7px",
  },

  heroCardText: {
    margin: 0,
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  resourcesSection: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "25px 7% 90px",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "38px",
  },

  sectionLabel: {
    color: "#4f46e5",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "8px",
  },

  sectionTitle: {
    margin: 0,
    fontSize: "32px",
    letterSpacing: "-1px",
  },

  sectionDescription: {
    maxWidth: "450px",
    margin: 0,
    color: "#64748b",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "27px",
    minHeight: "315px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.035)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
  },

  resourceIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  badge: {
    color: "#4f46e5",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.4px",
  },

  cardTitle: {
    margin: "0 0 12px",
    fontSize: "20px",
    letterSpacing: "-0.4px",
  },

  cardDescription: {
    margin: 0,
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.7",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "7px",
    marginTop: "20px",
  },

  tag: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    color: "#475569",
    padding: "5px 9px",
    borderRadius: "7px",
    fontSize: "11px",
    fontWeight: "600",
  },

  exploreButton: {
    marginTop: "auto",
    paddingTop: "22px",
    border: "none",
    background: "transparent",
    color: "#4f46e5",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  cta: {
    maxWidth: "1030px",
    margin: "0 auto 80px",
    padding: "42px 48px",
    borderRadius: "24px",
    background: "#111827",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },

  ctaLabel: {
    color: "#a5b4fc",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "12px",
  },

  ctaTitle: {
    margin: 0,
    fontSize: "30px",
    lineHeight: "1.2",
    letterSpacing: "-0.8px",
  },

  ctaText: {
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.7",
    maxWidth: "550px",
    marginBottom: 0,
  },

  ctaButton: {
    flexShrink: 0,
    background: "#ffffff",
    color: "#111827",
    textDecoration: "none",
    padding: "13px 19px",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: "700",
  },

  footer: {
    borderTop: "1px solid #e2e8f0",
    background: "#ffffff",
    padding: "25px 7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#94a3b8",
    fontSize: "12px",
  },

  footerLink: {
    color: "#475569",
    textDecoration: "none",
    fontWeight: "700",
  },
};

export default Resources;