import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "button--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      href="https://klant.anbako.nl/login?url=%2f"
      className="btn-mobile"
      target="_blank"
      rel="noreferrer"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
