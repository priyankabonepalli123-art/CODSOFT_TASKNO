import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: ""
    }
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: ""
      }
    ]);
  };

  const updateQuestion = (index, value) => {
    const updated = [...questions];

    updated[index].question = value;

    setQuestions(updated);
  };

  const updateOption = (
    questionIndex,
    optionIndex,
    value
  ) => {
    const updated = [...questions];

    updated[questionIndex].options[optionIndex] =
      value;

    setQuestions(updated);
  };

  const updateCorrectAnswer = (index, value) => {
    const updated = [...questions];

    updated[index].correctAnswer = value;

    setQuestions(updated);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) return;

    setQuestions(
      questions.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/quizzes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            title,
            description,
            questions
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Quiz created successfully!");

      navigate("/quizzes");
    } catch (error) {
      alert("Server connection failed");
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Create Your Quiz</h1>

        <p className="subtitle">
          Add questions and multiple-choice answers.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Quiz Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />

          <textarea
            placeholder="Quiz Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          {questions.map((q, index) => (
            <div className="question-card" key={index}>
              <div className="question-header">
                <h3>
                  Question {index + 1}
                </h3>

                {questions.length > 1 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeQuestion(index)
                    }
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                type="text"
                placeholder="Enter question"
                value={q.question}
                onChange={(e) =>
                  updateQuestion(
                    index,
                    e.target.value
                  )
                }
                required
              />

              {q.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  placeholder={`Option ${
                    optionIndex + 1
                  }`}
                  value={option}
                  onChange={(e) =>
                    updateOption(
                      index,
                      optionIndex,
                      e.target.value
                    )
                  }
                  required
                />
              ))}

              <select
                value={q.correctAnswer}
                onChange={(e) =>
                  updateCorrectAnswer(
                    index,
                    e.target.value
                  )
                }
                required
              >
                <option value="">
                  Select Correct Answer
                </option>

                {q.options.map(
                  (option, optionIndex) => (
                    <option
                      key={optionIndex}
                      value={option}
                    >
                      Option {optionIndex + 1}
                    </option>
                  )
                )}
              </select>
            </div>
          ))}

          <button
            type="button"
            className="add-question-btn"
            onClick={addQuestion}
          >
            + Add Question
          </button>

          <button
            type="submit"
            className="primary-btn full-btn"
          >
            Publish Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;