import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submittedGuess, setSubmittedGuess] = useState("");

  const handleGuessSubmission = (guess) => {
    setSubmittedGuess(guess);
  };

  console.log({ submittedGuess });
  return (
    <>
      <GuessInput handleGuessSubmission={handleGuessSubmission} />
    </>
  );
}

export default Game;
