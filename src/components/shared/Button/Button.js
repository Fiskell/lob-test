import React from "react";

const Button = ({ className = "", type = "button", children, ...other }) => {
  return (
    <button
      type={type === "submit" ? type : "button"}
      className={`text-xl text-white bold border bg-blue-500 rounded-lg p-4 hover:bg-blue-700 ${className}`}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
