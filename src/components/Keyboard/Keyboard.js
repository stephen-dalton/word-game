import React from "react";
import KeyboardRow from "../KeyboardRow";

function Keyboard({ validatedGuesses, answer }) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return (
    <div className="keyboard">
      {rows.map((row, idx) => (
        <KeyboardRow
          key={idx}
          row={row}
          answer={answer}
          validatedGuesses={validatedGuesses}
        />
      ))}
    </div>
  );
}

export default Keyboard;
