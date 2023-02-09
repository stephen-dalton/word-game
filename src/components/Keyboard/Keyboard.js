import React from "react";

import { ALPHABET } from "../../constants";
import Key from "../Key";

function Keyboard() {
  const keys = ALPHABET.split("").map((letter) => (
    <Key key={letter} character={letter} />
  ));

  return (
    <div className="keyboard-wrapper">
      <p className="keyboard">{keys}</p>
    </div>
  );
}

export default Keyboard;
