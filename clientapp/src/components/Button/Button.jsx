import React from "react";
import "./Button.scss";

export default function Button({
  onClick,
  children,
  type = "default",
  btnType = "button",
}) {
  const styleType = `btn--${type}`;
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={["btn", styleType].join(" ")}
    >
      {children}
    </button>
  );
}
