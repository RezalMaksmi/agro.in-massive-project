import React from "react";

const TextShortener = ({ text, maxLength }) => {
  const shortenedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <div>{shortenedText}</div>;
};

export default TextShortener;
