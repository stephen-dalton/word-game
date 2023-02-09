import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
  const board = range(NUM_OF_GUESSES_ALLOWED).map((index) => (
    <Guess key={index} value={guesses[index]} answer={answer} />
  ));
  return <div className="guess-results">{board}</div>;
}

export default GuessResults;
