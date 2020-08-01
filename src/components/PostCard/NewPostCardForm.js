import React from "react";

const NewPostCardForm = () => {
  return (
    <div className="border-2 border-blue-200 rounded-lg w-1/2 p-8 shadow-xl bg-white">
      {/* Description */}
      <FormGroup>
        <FormLabel>Description:</FormLabel>
        <Input value={""} autofocus />
      </FormGroup>

      {/* To address */}
      <FormGroup>
        <FormLabel>To:</FormLabel>
        <Input value={""} autofocus />
      </FormGroup>

      {/* From address */}
      <FormGroup>
        <FormLabel>From:</FormLabel>
        <Input value={""} autofocus />
      </FormGroup>

      {/* Front of postcard */}
      <FormGroup>
        <FormLabel>Front:</FormLabel>
        <Input value={""} autofocus />
      </FormGroup>

      {/* Back of postcard */}
      <FormGroup>
        <FormLabel>Back:</FormLabel>
        <Input value={""} autofocus />
      </FormGroup>

      {/* Submit */}
      <Button>SUBMIT</Button>
    </div>
  );
};

const Input = ({ className, ...other }) => {
  return (
    <input
      type="text"
      className="w-full border border-gray-400 rounded-lg h-12"
      {...other}
    />
  );
};

const FormLabel = ({ children }) => {
  return <div className="text-2xl text-blue-900 bold mb-1">{children}</div>;
};

const FormGroup = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const Button = ({ className = "", children }) => {
  return (
    <button
      className={`text-xl text-white bold border bg-blue-500 rounded-lg p-4 hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default NewPostCardForm;
