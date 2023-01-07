import React from "react";
import "./Spinner.scss";

export default function Spinner({ size = "small" }) {
  return <div className={["spinner", `spinner--${size}`].join(" ")} />;
}
