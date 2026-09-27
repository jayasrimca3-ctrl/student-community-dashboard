import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  // Get logged-in user from localStorage
  const storedUser = localStorage.getItem("user");

  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  // Show Admin button only for the admin account
  const isAdmin =
    user?.email?.toLowerCase() === "jayasri.mca3@gmail.com" ||
    user?.role === "admin";

  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">

        <Link to="/" className="logo">
          Student<span>Community</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/resources">Resources</Link>
        </nav>

        <div className="nav-actions">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          {/* Admin Button */}
          {isAdmin && (
            <Link to="/admin" className="admin-btn">
              Admin
            </Link>
          )}

          <Link to="/register" className="join-btn">
            Join Community
          </Link>

        </div>
      </header>

      {/* Hero */}
      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <p className="hero-label">
              WELCOME TO OUR COMMUNITY
            </p>

            <h1>
              Connect.
              <br />
              Learn.
              <br />
              <span>Grow Together.</span>
            </h1>

            <p className="hero-description">
              A vibrant community where students connect with
              like-minded people, discover opportunities, share
              knowledge, and grow together.
            </p>

            <div className="hero-buttons">

              <Link
                to="/register"
                className="primary-btn"
              >
                Join the Community →
              </Link>

              <Link
                to="/events"
                className="secondary-btn"
              >
                Explore Events
              </Link>

            </div>

          </div>

          {/* Hero Card */}
          <div className="hero-card">

            <div className="card-icon">
              🎓
            </div>

            <h2>
              Student Community
            </h2>

            <p>
              Learn new skills, participate in events,
              discover opportunities and build meaningful
              connections with students.
            </p>

            <div className="stats">

              <div>
                <strong>500+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Events</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Resources</span>
              </div>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="features" id="about">

          <div className="section-heading">

            <p>
              WHY JOIN US?
            </p>

            <h2>
              Everything you need to grow
            </h2>

          </div>

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                🤝
              </div>

              <h3>
                Connect
              </h3>

              <p>
                Meet students from different backgrounds
                and build valuable connections.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                📚
              </div>

              <h3>
                Learn
              </h3>

              <p>
                Access learning resources, workshops and
                knowledge shared by the community.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                🚀
              </div>

              <h3>
                Grow
              </h3>

              <p>
                Develop your skills and discover opportunities
                that help you move forward.
              </p>

            </div>

          </div>

        </section>

        {/* How It Works */}
        <section className="how-section">

          <div className="section-heading">

            <p>
              HOW IT WORKS
            </p>

            <h2>
              Start your journey in three steps
            </h2>

          </div>

          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>
                Create your profile
              </h3>

              <p>
                Register with your academic and personal
                information.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>
                Explore the community
              </h3>

              <p>
                Discover events, resources and opportunities
                created for students.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>
                Learn and grow
              </h3>

              <p>
                Participate, connect with others and develop
                your skills.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="cta-section">

          <div>

            <p>
              READY TO GET STARTED?
            </p>

            <h2>
              Become part of our student community.
            </h2>

          </div>

          <Link
            to="/register"
            className="primary-btn"
          >
            Join Community →
          </Link>

        </section>

      </main>

      {/* Footer */}
      <footer>

        <Link to="/" className="logo">
          Student<span>Community</span>
        </Link>

        <p>
          © 2026 Student Community. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;