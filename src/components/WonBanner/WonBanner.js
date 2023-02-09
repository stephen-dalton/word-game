import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuess }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuess} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
