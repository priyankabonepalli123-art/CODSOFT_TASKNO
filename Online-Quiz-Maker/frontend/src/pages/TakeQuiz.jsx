import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/quizzes/${id}`
        );

        const data = await response.json();

        setQuiz(data);

        setAnswers(
          new Array(data.questions.length).fill("")
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) {
    return (
      <div className="loading">
        Loading quiz...
      </div>
    );
  }

  const question =
    quiz.questions[currentQuestion];

  const selectAnswer = (answer) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = answer;

    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (
      currentQuestion <
      quiz.questions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (
        answers[index] ===
        question.correctAnswer
      ) {
        score++;
      }
    });

    navigate("/results", {
      state: {
        quiz,
        answers,
        score
      }
    });
  };

  return (
    <div className="quiz-taking-container">
      <div className="quiz-progress">
        Question {currentQuestion + 1} of{" "}
        {quiz.questions.length}
      </div>

      <div className="taking-card">
        <h1>{quiz.title}</h1>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map(
            (option, index) => (
              <button
                key={index}
                className={
                  answers[currentQuestion] ===
                  option
                    ? "option selected"
                    : "option"
                }
                onClick={() =>
                  selectAnswer(option)
                }
              >
                <span>
                  {String.fromCharCode(
                    65 + index
                  )}
                </span>

                {option}
              </button>
            )
          )}
        </div>

        <div className="quiz-navigation">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          {currentQuestion ===
          quiz.questions.length - 1 ? (
            <button
              className="submit-btn"
              onClick={submitQuiz}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              className="next-btn"
              onClick={nextQuestion}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TakeQuiz;