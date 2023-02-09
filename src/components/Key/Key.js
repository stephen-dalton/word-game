import React from "react";

function Key({ character, status }) {
  const className = status ? `key ${status}` : "key";
  return <span className={className}>{character}</span>;
}

export default Key;
