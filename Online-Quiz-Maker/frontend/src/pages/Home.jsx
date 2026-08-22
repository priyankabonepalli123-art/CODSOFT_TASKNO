import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="badge">ONLINE QUIZ MAKER</p>

        <h1>
          Learn. Test. <span>Improve.</span>
        </h1>

        <p>
          Create exciting quizzes, challenge yourself,
          and check your knowledge instantly.
        </p>

        <div className="hero-buttons">
          <Link to="/create" className="primary-btn">
            Create a Quiz
          </Link>

          <Link to="/quizzes" className="secondary-btn">
            Take a Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;