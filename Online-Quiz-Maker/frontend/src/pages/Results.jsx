import { Link, useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();

  const { quiz, answers, score } =
    location.state || {};

  if (!quiz) {
    return (
      <div className="empty-card">
        <h2>No result available</h2>

        <Link
          to="/quizzes"
          className="primary-btn"
        >
          Go to Quizzes
        </Link>
      </div>
    );
  }

  const percentage = Math.round(
    (score / quiz.questions.length) * 100
  );

  return (
    <div className="results-container">
      <div className="result-card">
        <div className="result-icon">
          {percentage >= 50 ? "🎉" : "📚"}
        </div>

        <h1>Quiz Completed!</h1>

        <p>{quiz.title}</p>

        <div className="score">
          {score} / {quiz.questions.length}
        </div>

        <h2>{percentage}%</h2>

        <p>
          {percentage >= 80
            ? "Excellent work! 🏆"
            : percentage >= 50
            ? "Good job! Keep practicing. 👍"
            : "Keep learning and try again! 💪"}
        </p>
      </div>

      <div className="answers-review">
        <h2>Answer Review</h2>

        {quiz.questions.map(
          (question, index) => {
            const isCorrect =
              answers[index] ===
              question.correctAnswer;

            return (
              <div
                className={
                  isCorrect
                    ? "review-item correct"
                    : "review-item wrong"
                }
                key={index}
              >
                <h3>
                  {index + 1}.{" "}
                  {question.question}
                </h3>

                <p>
                  Your Answer:{" "}
                  <strong>
                    {answers[index] ||
                      "Not Answered"}
                  </strong>
                </p>

                <p>
                  Correct Answer:{" "}
                  <strong>
                    {question.correctAnswer}
                  </strong>
                </p>

                <span>
                  {isCorrect
                    ? "✓ Correct"
                    : "✗ Incorrect"}
                </span>
              </div>
            );
          }
        )}
      </div>

      <div className="result-buttons">
        <Link
          to="/quizzes"
          className="primary-btn"
        >
          Browse More Quizzes
        </Link>

        <Link
          to="/"
          className="secondary-btn"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Results;