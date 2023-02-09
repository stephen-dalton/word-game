import React, { useState } from "react";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

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
      <Keyboard />
      {gameStatus === "won" && <WonBanner numOfGuess={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
