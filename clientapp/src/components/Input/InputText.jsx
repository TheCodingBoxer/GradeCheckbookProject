import React from "react";
import "./InputText.scss";

export default function InputText({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      className="bbd-text-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
