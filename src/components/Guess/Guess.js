import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

/*
  Returns:

  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
*/

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value }) {
  const displayGuess = range(0, 5).map((index) => (
    <Cell
      key={index}
      letter={value ? value[index].letter : undefined}
      status={value ? value[index].status : undefined}
    />
  ));
  return <p className="guess">{displayGuess}</p>;
}

export default Guess;
