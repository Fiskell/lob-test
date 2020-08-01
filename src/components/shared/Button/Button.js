import React from "react";

const Button = ({
  className = "",
  type = "button",
  children,
  onClick,
  disabled = false,
  ...other
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      type={type === "submit" ? type : "button"}
      className={`text-xl text-white bold border bg-blue-500 rounded-lg p-4 ${
        disabled ? "opacity-50 cursor-not-allowd" : "hover:bg-blue-700"
      } ${className}`}
      disabled={disabled}
      onClick={handleClick}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
