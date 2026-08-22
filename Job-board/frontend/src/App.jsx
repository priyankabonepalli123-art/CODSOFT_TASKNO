import React from "react";
import { useState } from "react";
import "./App.css";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedJob, setSelectedJob] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Hyderabad, India",
      type: "Full Time",
      salary: "₹5 - ₹8 LPA",
      category: "Web Development",
      description:
        "We are looking for a passionate Frontend Developer to build modern and responsive web applications.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 2,
      title: "Python Developer",
      company: "CodeCraft Technologies",
      location: "Bangalore, India",
      type: "Full Time",
      salary: "₹6 - ₹10 LPA",
      category: "Software Development",
      description:
        "Join our development team and work on scalable Python applications and backend services.",
      skills: ["Python", "Flask", "Django", "SQL"],
    },
    {
      id: 3,
      title: "AWS Cloud Intern",
      company: "CloudSphere",
      location: "Remote",
      type: "Internship",
      salary: "₹15,000/month",
      category: "Cloud Computing",
      description:
        "An exciting opportunity for students interested in AWS cloud computing and DevOps.",
      skills: ["AWS", "EC2", "S3", "Linux"],
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Innovate Labs",
      location: "Chennai, India",
      type: "Full Time",
      salary: "₹7 - ₹12 LPA",
      category: "Software Development",
      description:
        "Work with our engineering team to develop full-stack web applications.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Pune, India",
      type: "Full Time",
      salary: "₹4 - ₹7 LPA",
      category: "Design",
      description:
        "Create beautiful and user-friendly interfaces for web and mobile applications.",
      skills: ["Figma", "UI Design", "UX Design", "Prototyping"],
    },
    {
      id: 6,
      title: "Data Analyst",
      company: "DataWorks",
      location: "Mumbai, India",
      type: "Full Time",
      salary: "₹5 - ₹9 LPA",
      category: "Data Science",
      description:
        "Analyze business data and generate meaningful insights using modern analytics tools.",
      skills: ["Python", "SQL", "Excel", "Power BI"],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.toLowerCase();
    const loc = location.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.category.toLowerCase().includes(search);

    const matchesLocation =
      job.location.toLowerCase().includes(loc);

    return matchesSearch && matchesLocation;
  });

  const navigate = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const openJob = (job) => {
    setSelectedJob(job);
    navigate("details");
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <div
            className="logo"
            onClick={() => navigate("home")}
          >
            <div className="logo-icon">J</div>

            <span>
              Job<span>Board</span>
            </span>
          </div>

          <nav className="nav-links">

            <button
              className={page === "home" ? "active" : ""}
              onClick={() => navigate("home")}
            >
              Home
            </button>

            <button
              className={page === "jobs" ? "active" : ""}
              onClick={() => navigate("jobs")}
            >
              Find Jobs
            </button>

            <button onClick={() => navigate("companies")}>
              Companies
            </button>

            <button onClick={() => navigate("about")}>
              About
            </button>

          </nav>

          <div className="nav-actions">

            <button
              className="login-btn"
              onClick={() => navigate("login")}
            >
              Login
            </button>

            <button
              className="signup-btn"
              onClick={() => navigate("signup")}
            >
              Sign Up
            </button>

          </div>

        </div>
      </header>


      {/* ================= HOME PAGE ================= */}

      {page === "home" && (
        <>
          <section className="hero">

            <div className="hero-content">

              <div className="hero-badge">
                🚀 Find your next opportunity
              </div>

              <h1>
                Find the job that
                <span> fits your future.</span>
              </h1>

              <p>
                Discover thousands of job opportunities from top
                companies and take the next step in your career.
              </p>

              <div className="search-box">

                <div className="search-field">
                  <span>🔍</span>

                  <input
                    type="text"
                    placeholder="Job title, keyword or company"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </div>

                <div className="search-field">
                  <span>📍</span>

                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                  />
                </div>

                <button
                  className="search-btn"
                  onClick={() => navigate("jobs")}
                >
                  Search Jobs
                </button>

              </div>

              <div className="popular">

                <strong>Popular:</strong>

                <span>Frontend Developer</span>
                <span>Python</span>
                <span>Data Analyst</span>
                <span>AWS</span>

              </div>

            </div>

          </section>


          {/* STATS */}

          <section className="stats">

            <div>
              <h2>10K+</h2>
              <p>Active Jobs</p>
            </div>

            <div>
              <h2>5K+</h2>
              <p>Companies</p>
            </div>

            <div>
              <h2>25K+</h2>
              <p>Job Seekers</p>
            </div>

            <div>
              <h2>2K+</h2>
              <p>Jobs Filled</p>
            </div>

          </section>


          {/* FEATURED JOBS */}

          <section className="section">

            <div className="section-heading">

              <div>
                <p className="small-title">
                  EXPLORE OPPORTUNITIES
                </p>

                <h2>Featured Jobs</h2>
              </div>

              <button
                className="view-all"
                onClick={() => navigate("jobs")}
              >
                View All Jobs →
              </button>

            </div>

            <div className="jobs-grid">

              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => openJob(job)}
                />
              ))}

            </div>

          </section>


          {/* EMPLOYER CTA */}

          <section className="cta">

            <div>

              <p className="small-title">
                FOR EMPLOYERS
              </p>

              <h2>
                Find the right talent
                <br />
                for your team.
              </h2>

              <p>
                Post your job and connect with talented
                professionals looking for their next opportunity.
              </p>

              <button
                onClick={() => navigate("postjob")}
              >
                Post a Job →
              </button>

            </div>

            <div className="cta-icon">
              👥
            </div>

          </section>
        </>
      )}


      {/* ================= JOBS PAGE ================= */}

      {page === "jobs" && (
        <section className="page-container">

          <div className="page-header">

            <p className="small-title">
              CAREER OPPORTUNITIES
            </p>

            <h1>Find Your Dream Job</h1>

            <p>
              Search through our latest job opportunities.
            </p>

          </div>


          <div className="job-search-large">

            <input
              placeholder="🔍 Search jobs, companies or skills"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <input
              placeholder="📍 Location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

            <button>
              Search
            </button>

          </div>


          <div className="jobs-layout">

            <aside className="filters">

              <h3>Filter Jobs</h3>

              <label>Job Type</label>

              <div>
                <input type="checkbox" />
                Full Time
              </div>

              <div>
                <input type="checkbox" />
                Internship
              </div>

              <div>
                <input type="checkbox" />
                Part Time
              </div>

              <label>Experience</label>

              <div>
                <input type="checkbox" />
                Fresher
              </div>

              <div>
                <input type="checkbox" />
                1-3 Years
              </div>

              <div>
                <input type="checkbox" />
                3+ Years
              </div>

            </aside>


            <div className="jobs-results">

              <div className="results-top">

                <strong>
                  {filteredJobs.length} Jobs Found
                </strong>

                <select>
                  <option>Most Recent</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>

              </div>

              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    horizontal
                    onClick={() => openJob(job)}
                  />
                ))
              ) : (
                <div className="no-results">

                  <h2>No Jobs Found</h2>

                  <p>
                    Try searching with a different keyword.
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>
      )}


      {/* ================= JOB DETAILS ================= */}

      {page === "details" && selectedJob && (
        <section className="page-container">

          <button
            className="back-btn"
            onClick={() => navigate("jobs")}
          >
            ← Back to Jobs
          </button>

          <div className="job-detail">

            <div className="detail-main">

              <div className="company-logo">
                {selectedJob.company.charAt(0)}
              </div>

              <p className="small-title">
                {selectedJob.category}
              </p>

              <h1>{selectedJob.title}</h1>

              <h3>{selectedJob.company}</h3>

              <p>
                📍 {selectedJob.location}
              </p>

              <div className="detail-tags">

                <span>
                  💼 {selectedJob.type}
                </span>

                <span>
                  💰 {selectedJob.salary}
                </span>

              </div>

              <hr />

              <h2>Job Description</h2>

              <p>
                {selectedJob.description}
              </p>

              <h2>Required Skills</h2>

              <div className="skills">

                {selectedJob.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

              <h2>About the Role</h2>

              <p>
                You will work with a talented team to develop
                innovative products and solutions. This role
                provides an excellent opportunity to learn,
                grow and build your professional career.
              </p>

            </div>


            <aside className="apply-card">

              <h3>Ready to Apply?</h3>

              <p>
                Take the next step in your career.
              </p>

              <button
                onClick={() => navigate("apply")}
              >
                Apply Now →
              </button>

              <button
                className="save-btn"
                onClick={() =>
                  alert("Job saved successfully!")
                }
              >
                ♡ Save Job
              </button>

            </aside>

          </div>

        </section>
      )}


      {/* ================= LOGIN PAGE ================= */}

      {page === "login" && (
        <LoginPage
          onSwitch={() => navigate("signup")}
          onSuccess={() => navigate("home")}
        />
      )}


      {/* ================= SIGNUP PAGE ================= */}

      {page === "signup" && (
        <SignupPage
          onSwitch={() => navigate("login")}
          onSuccess={() => navigate("login")}
        />
      )}


      {/* ================= APPLY PAGE ================= */}

      {page === "apply" && (
        <ApplyPage
          job={selectedJob}
          onBack={() => navigate("details")}
        />
      )}


      {/* ================= POST JOB ================= */}

      {page === "postjob" && (
        <PostJobPage
          onBack={() => navigate("home")}
          onSuccess={() => navigate("jobs")}
        />
      )}


      {/* ================= COMPANIES ================= */}

      {page === "companies" && (
        <CompaniesPage
          onViewJobs={() => navigate("jobs")}
        />
      )}


      {/* ================= ABOUT ================= */}

      {page === "about" && (
        <AboutPage />
      )}


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <div className="footer-logo">

              <div className="logo-icon">
                J
              </div>

              <span>
                Job<span>Board</span>
              </span>

            </div>

            <p>
              Find your dream job and build your future.
            </p>

          </div>


          <div>

            <h3>For Job Seekers</h3>

            <button onClick={() => navigate("jobs")}>
              Find Jobs
            </button>

            <button onClick={() => navigate("signup")}>
              Create Account
            </button>

          </div>


          <div>

            <h3>For Employers</h3>

            <button onClick={() => navigate("postjob")}>
              Post a Job
            </button>

            <button onClick={() => navigate("companies")}>
              Companies
            </button>

          </div>


          <div>

            <h3>Company</h3>

            <button onClick={() => navigate("about")}>
              About Us
            </button>

          </div>

        </div>


        <div className="copyright">
          © 2026 JobBoard. All rights reserved.
        </div>

      </footer>

    </div>
  );
}


/* =====================================================
   JOB CARD
===================================================== */

function JobCard({ job, onClick, horizontal }) {
  return (
    <div
      className={`job-card ${
        horizontal ? "horizontal" : ""
      }`}
      onClick={onClick}
    >

      <div className="job-top">

        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <div>

          <h3>{job.title}</h3>

          <p>{job.company}</p>

        </div>

      </div>


      <div className="job-info">

        <span>
          📍 {job.location}
        </span>

        <span>
          💼 {job.type}
        </span>

        <span>
          💰 {job.salary}
        </span>

      </div>


      <div className="job-bottom">

        <span className="category">
          {job.category}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Job →
        </button>

      </div>

    </div>
  );
}


/* =====================================================
   SIGNUP PAGE - CONNECTED TO EXPRESS + MONGODB
===================================================== */

function SignupPage({ onSwitch, onSuccess }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSignup = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");


    try {

      const response = await fetch(
        "http://localhost:5000/api/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        setMessage(
          data.message || "Signup failed."
        );

        setLoading(false);

        return;
      }


      alert(
        "Account created successfully!"
      );


      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      onSuccess();

    } catch (error) {

      console.error(error);

      setMessage(
        "Unable to connect to server. Make sure your Express server is running."
      );

    }


    setLoading(false);
  };


  return (
    <section className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">

          <div className="logo-icon">
            J
          </div>

          <span>
            Job<span>Board</span>
          </span>

        </div>


        <h1>
          Create Your Account
        </h1>

        <p>
          Join JobBoard and find your dream job.
        </p>


        <form onSubmit={handleSignup}>

          <div>

            <label>
              Full Name
            </label>

            <input
              required
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>


          <div>

            <label>
              Email Address
            </label>

            <input
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>


          <div>

            <label>
              Password
            </label>

            <input
              required
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>


          <div>

            <label>
              Confirm Password
            </label>

            <input
              required
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

          </div>


          {message && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              {message}
            </p>
          )}


          <button
            type="submit"
            className="primary-submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>


        <div className="auth-switch">

          Already have an account?

          <button onClick={onSwitch}>
            Login
          </button>

        </div>

      </div>

    </section>
  );
}


/* =====================================================
   LOGIN PAGE
===================================================== */

function LoginPage({ onSwitch, onSuccess }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");


    try {

      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        setMessage(
          data.message || "Login failed."
        );

        setLoading(false);

        return;
      }


      localStorage.setItem(
        "jobboardUser",
        JSON.stringify(data.user)
      );


      alert("Login successful!");

      onSuccess();

    } catch (error) {

      console.error(error);

      setMessage(
        "Unable to connect to server."
      );

    }


    setLoading(false);
  };


  return (
    <section className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">

          <div className="logo-icon">
            J
          </div>

          <span>
            Job<span>Board</span>
          </span>

        </div>


        <h1>
          Welcome Back!
        </h1>

        <p>
          Login to continue your job search.
        </p>


        <form onSubmit={handleLogin}>

          <div>

            <label>
              Email Address
            </label>

            <input
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>


          <div>

            <label>
              Password
            </label>

            <input
              required
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>


          {message && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              {message}
            </p>
          )}


          <button
            type="submit"
            className="primary-submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>


        <div className="auth-switch">

          Don't have an account?

          <button onClick={onSwitch}>
            Create Account
          </button>

        </div>

      </div>

    </section>
  );
}


/* =====================================================
   APPLY PAGE
===================================================== */

function ApplyPage({ job, onBack }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone,
            jobId: job ? job.id : "",
            coverLetter,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        alert(
          data.message ||
          "Application failed."
        );

        return;
      }


      alert(
        "Application submitted successfully!"
      );

      onBack();

    } catch (error) {

      console.error(error);

      alert(
        "Unable to connect to server."
      );

    }
  };


  return (
    <section className="form-page">

      <div className="form-card">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>


        <h1>
          Apply for Job
        </h1>

        <p>
          {job
            ? `Applying for ${job.title} at ${job.company}`
            : "Fill in your details and submit your application."}
        </p>


        <form onSubmit={handleSubmit}>

          <label>
            Full Name
          </label>

          <input
            required
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />


          <label>
            Email
          </label>

          <input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />


          <label>
            Phone Number
          </label>

          <input
            required
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />


          <label>
            Cover Letter
          </label>

          <textarea
            rows="6"
            placeholder="Write a short cover letter"
            value={coverLetter}
            onChange={(e) =>
              setCoverLetter(e.target.value)
            }
          />


          <button
            type="submit"
            className="primary-submit"
          >
            Submit Application
          </button>

        </form>

      </div>

    </section>
  );
}


/* =====================================================
   POST JOB PAGE
===================================================== */

function PostJobPage({ onBack, onSuccess }) {

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    salary: "",
    category: "",
    description: "",
  });


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5000/api/jobs",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...form,
            skills: [],
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        alert(
          data.message ||
          "Unable to post job."
        );

        return;
      }


      alert(
        "Job posted successfully!"
      );

      onSuccess();

    } catch (error) {

      console.error(error);

      alert(
        "Unable to connect to server."
      );

    }
  };


  return (
    <section className="form-page">

      <div className="form-card wide">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>


        <h1>
          Post a Job
        </h1>

        <p>
          Find talented candidates for your company.
        </p>


        <form onSubmit={handleSubmit}>

          <div className="two-column">

            <div>

              <label>
                Job Title
              </label>

              <input
                required
                name="title"
                placeholder="e.g. Frontend Developer"
                value={form.title}
                onChange={handleChange}
              />

            </div>


            <div>

              <label>
                Company Name
              </label>

              <input
                required
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={handleChange}
              />

            </div>


            <div>

              <label>
                Location
              </label>

              <input
                required
                name="location"
                placeholder="e.g. Hyderabad"
                value={form.location}
                onChange={handleChange}
              />

            </div>


            <div>

              <label>
                Job Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >

                <option>
                  Full Time
                </option>

                <option>
                  Part Time
                </option>

                <option>
                  Internship
                </option>

                <option>
                  Remote
                </option>

              </select>

            </div>


            <div>

              <label>
                Salary
              </label>

              <input
                name="salary"
                placeholder="e.g. ₹5 - ₹8 LPA"
                value={form.salary}
                onChange={handleChange}
              />

            </div>


            <div>

              <label>
                Category
              </label>

              <input
                name="category"
                placeholder="e.g. Web Development"
                value={form.category}
                onChange={handleChange}
              />

            </div>

          </div>


          <label>
            Job Description
          </label>

          <textarea
            required
            name="description"
            rows="7"
            placeholder="Describe the job..."
            value={form.description}
            onChange={handleChange}
          />


          <button
            type="submit"
            className="primary-submit"
          >
            Post Job →
          </button>

        </form>

      </div>

    </section>
  );
}


/* =====================================================
   COMPANIES PAGE
===================================================== */

function CompaniesPage({ onViewJobs }) {

  const companies = [
    ["TechNova Solutions", "Technology"],
    ["CodeCraft Technologies", "Software"],
    ["CloudSphere", "Cloud Computing"],
    ["Innovate Labs", "Technology"],
    ["DesignHub", "Design"],
    ["DataWorks", "Data & Analytics"],
  ];


  return (
    <section className="page-container">

      <div className="page-header">

        <p className="small-title">
          TOP EMPLOYERS
        </p>

        <h1>
          Explore Companies
        </h1>

        <p>
          Discover companies hiring talented professionals.
        </p>

      </div>


      <div className="companies-grid">

        {companies.map(
          ([name, category]) => (

            <div
              className="company-card"
              key={name}
            >

              <div className="company-logo">
                {name.charAt(0)}
              </div>

              <h3>
                {name}
              </h3>

              <p>
                {category}
              </p>

              <button onClick={onViewJobs}>
                View Jobs →
              </button>

            </div>

          )
        )}

      </div>

    </section>
  );
}


/* =====================================================
   ABOUT PAGE
===================================================== */

function AboutPage() {

  return (
    <section className="page-container about-page">

      <div className="page-header">

        <p className="small-title">
          ABOUT US
        </p>

        <h1>
          Connecting Talent With Opportunity
        </h1>

      </div>


      <div className="about-content">

        <p>
          JobBoard is a modern job-search platform designed
          to connect talented job seekers with companies
          looking for great people.
        </p>

        <p>
          Our goal is to make the job search simple, fast
          and accessible for everyone. Whether you're a
          fresher looking for your first opportunity or an
          experienced professional looking for your next
          challenge, JobBoard helps you discover the right
          opportunity.
        </p>


        <div className="about-features">

          <div>

            <span>🔍</span>

            <h3>
              Easy Job Search
            </h3>

            <p>
              Find relevant jobs quickly.
            </p>

          </div>


          <div>

            <span>🏢</span>

            <h3>
              Top Companies
            </h3>

            <p>
              Explore opportunities from leading companies.
            </p>

          </div>


          <div>

            <span>🚀</span>

            <h3>
              Career Growth
            </h3>

            <p>
              Take the next step in your career.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}


export default App;