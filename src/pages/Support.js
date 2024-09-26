import React, { useState } from "react";

function Support() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback enviado: ${feedback}`);
  };

  return (
    <div>
      <h1>Feedback e Suporte</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Deixe seu feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Support;
