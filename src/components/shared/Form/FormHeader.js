import React from "react";

const FormHeader = ({ className = "", children }) => {
  return (
    <div
      className={`bg-blue-700 text-white p-4 text-xl font-bold overflow-hidden rounded-t-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default FormHeader;
