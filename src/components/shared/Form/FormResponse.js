import React from "react";

const FormResponse = ({ response, className = "" }) => {
  if (!response) {
    return "";
  }

  const error = !response.success;
  const successMessage = "Successfully created a post card.";
  const responseClasses = error
    ? "border-red-500 bg-red-100"
    : "border-gree-500 bg-green-100";

  return (
    <div className={`border rounded-lg ${responseClasses} ${className}`}>
      <div className="p-4">{error ? response.message : successMessage}</div>
    </div>
  );
};

export default FormResponse;
