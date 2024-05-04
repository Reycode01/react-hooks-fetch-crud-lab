import React, { useState } from "react";

function QuestionForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", ""],
    correctIndex: 0,
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "answers") {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[index] = value;
      setFormData({ ...formData, answers: updatedAnswers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt:
        <input
          type="text"
          name="prompt"
          value={formData.prompt}
          onChange={handleChange}
          required
        />
      </label>
      {[0, 1, 2].map((index) => (
        <label key={index}>
          Answer {index + 1}:
          <input
            type="text"
            name="answers"
            value={formData.answers[index]}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </label>
      ))}
      <label>
        Correct Answer:
        <select
          name="correctIndex"
          value={formData.correctIndex}
          onChange={(e) => handleChange(e)}
        >
          {formData.answers.map((answer, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Question</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default QuestionForm;



