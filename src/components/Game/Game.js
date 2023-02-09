import React, { useState } from "react";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running won, lost
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  const handleGuessSubmission = (tentativeGuess) => {
    const nextSubmittedGuess = [...guesses, tentativeGuess];
    setGuesses(nextSubmittedGuess);

    if (tentativeGuess.toUpperCase() === answer && guesses.length <= 6) {
      setGameStatus("won");
    } else if (
      nextSubmittedGuess.length === NUM_OF_GUESSES_ALLOWED &&
      tentativeGuess.toUpperCase() !== answer
    ) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmission={handleGuessSubmission}
        gameStatus={gameStatus}
      />
      <Banner
        gameStatus={gameStatus}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
