
import React from "react";

function QuestionList({ questions, onDelete, onUpdate }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleUpdate = (id, event) => {
    const correctIndex = parseInt(event.target.value);
    onUpdate(id, correctIndex);
  };

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.prompt}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <label>
            Correct Answer:
            <select
              value={question.correctIndex}
              onChange={(event) => handleUpdate(question.id, event)}
            >
              {question.answers.map((answer, index) => (
                <option key={index} value={index}>
                  {index + 1}
                </option>
              ))}
            </select>
          </label>
          <button onClick={() => handleDelete(question.id)}>Delete Question</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
