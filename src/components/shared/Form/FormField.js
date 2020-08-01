import React from "react";

const FormField = ({ className, type = "text", ...other }) => {
  return (
    <input
      type={type}
      className="w-full border border-gray-400 rounded-lg h-12"
      {...other}
    />
  );
};

export default FormField;
