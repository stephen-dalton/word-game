import React from "react";
import Key from "../Key";

function getCharacaterStatus(validatedGuesses) {
  const statusObj = {};
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });
  return statusObj;
}

function KeyboardRow({ row, validatedGuesses }) {
  let letterStatus = getCharacaterStatus(validatedGuesses);
  return (
    <div className="keyboard-row">
      {row.split("").map((char, idx) => (
        <Key
          key={idx}
          character={char}
          status={letterStatus[char.toUpperCase()]}
        />
      ))}
    </div>
  );
}

export default KeyboardRow;
