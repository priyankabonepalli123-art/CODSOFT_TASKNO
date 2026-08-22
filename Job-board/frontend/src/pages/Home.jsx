import "../App.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Job<span>Board</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/login">Login</a>
          <a href="/register" className="register-btn">
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <h1>
            Find Your
            <span> Dream Job</span>
          </h1>

          <p>
            Discover thousands of job opportunities and take
            the next step in your career.
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Job title, keyword..."
            />

            <input
              type="text"
              placeholder="Location..."
            />

            <button>
              Search Jobs
            </button>

          </div>

        </div>
      </section>

      {/* Featured Jobs */}
      <section className="jobs-section">

        <h2>Featured Jobs</h2>

        <p className="section-description">
          Explore some of the latest opportunities.
        </p>

        <div className="job-container">

          <div className="job-card">

            <h3>Frontend Developer</h3>

            <p className="company">
              Tech Solutions Pvt Ltd
            </p>

            <p>📍 Hyderabad, India</p>

            <p>💰 ₹5 - ₹8 LPA</p>

            <div className="job-footer">
              <span>Full Time</span>

              <button>
                View Job
              </button>
            </div>

          </div>


          <div className="job-card">

            <h3>Backend Developer</h3>

            <p className="company">
              Software Technologies
            </p>

            <p>📍 Bangalore, India</p>

            <p>💰 ₹6 - ₹10 LPA</p>

            <div className="job-footer">
              <span>Full Time</span>

              <button>
                View Job
              </button>
            </div>

          </div>


          <div className="job-card">

            <h3>UI/UX Designer</h3>

            <p className="company">
              Creative Studio
            </p>

            <p>📍 Chennai, India</p>

            <p>💰 ₹4 - ₹7 LPA</p>

            <div className="job-footer">
              <span>Full Time</span>

              <button>
                View Job
              </button>
            </div>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="categories">

        <h2>Popular Job Categories</h2>

        <div className="category-container">

          <div className="category">
            <h3>💻 IT & Software</h3>
            <p>1200+ Jobs</p>
          </div>

          <div className="category">
            <h3>🎨 Design</h3>
            <p>500+ Jobs</p>
          </div>

          <div className="category">
            <h3>📊 Marketing</h3>
            <p>700+ Jobs</p>
          </div>

          <div className="category">
            <h3>💼 Finance</h3>
            <p>400+ Jobs</p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <h3>JobBoard</h3>

        <p>
          Find your dream job with JobBoard.
        </p>

        <p>
          © 2026 JobBoard. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;