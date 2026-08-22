import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuizzes = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/quizzes"
      );

      const data = await response.json();

      setQuizzes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading quizzes...
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="list-header">
        <div>
          <h1>Available Quizzes</h1>
          <p>Choose a quiz and test your knowledge.</p>
        </div>

        <Link
          to="/create"
          className="primary-btn"
        >
          + Create Quiz
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <div className="empty-card">
          <h2>No quizzes available</h2>

          <p>
            Be the first person to create a quiz!
          </p>

          <Link
            to="/create"
            className="primary-btn"
          >
            Create Quiz
          </Link>
        </div>
      ) : (
        <div className="quiz-grid">
          {quizzes.map((quiz) => (
            <div className="quiz-card" key={quiz._id}>
              <div className="quiz-icon">
                🧠
              </div>

              <h2>{quiz.title}</h2>

              <p>
                {quiz.description ||
                  "Test your knowledge with this quiz."}
              </p>

              <div className="quiz-info">
                <span>
                  📝 {quiz.questions.length} Questions
                </span>

                <span>
                  👤{" "}
                  {quiz.createdBy?.name ||
                    "Unknown"}
                </span>
              </div>

              <Link
                to={`/quiz/${quiz._id}`}
                className="primary-btn"
              >
                Start Quiz →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizList;