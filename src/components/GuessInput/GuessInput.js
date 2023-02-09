import React, { useState } from "react";

export default function GuessInput({ handleGuessSubmission, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuessSubmission(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        required
        value={tentativeGuess}
        disabled={gameStatus !== "running"}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}
