import React from "react";

const Button = ({ className = "", children }) => {
  return (
    <button
      className={`text-xl text-white bold border bg-blue-500 rounded-lg p-4 hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
