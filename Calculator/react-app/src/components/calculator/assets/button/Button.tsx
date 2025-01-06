import "./Button.css";
import React from "react";

interface ButtonProps {
  text: string;
  buttonId: string;
  buttonType: string;
  onClick: (arg: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonId,
  buttonType,
  onClick,
}) => {
  return (
    <button
      id={buttonId}
      className={`calculatorButton ${buttonType}`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};

export default Button;
