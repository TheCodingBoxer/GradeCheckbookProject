import React from "react";
import "./Button.scss";

export default function Button({ onClick, text, type = "default" }) {
  const styleType = `btn--${type}`;
  return (
    <button
      type="button"
      onClick={onClick}
      className={["btn", styleType].join(" ")}
    >
      {text}
    </button>
  );
}
