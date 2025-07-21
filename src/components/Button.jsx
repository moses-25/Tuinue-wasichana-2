import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;