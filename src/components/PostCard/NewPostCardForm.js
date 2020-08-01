import React from "react";
import AddressSelect from "components/AddressSelect/AddressSelect";
import { FormGroup, FormLabel, FormField, Button } from "components/shared";

const NewPostCardForm = () => {
  return (
    <div className="border-2 border-blue-200 rounded-lg w-1/2 p-8 shadow-xl bg-white">
      {/* Description */}
      <FormGroup>
        <FormLabel>Description:</FormLabel>
        <FormField value={""} autofocus />
      </FormGroup>

      {/* To address */}
      <FormGroup>
        <FormLabel>To:</FormLabel>
        <AddressSelect />
      </FormGroup>

      {/* From address */}
      <FormGroup>
        <FormLabel>From:</FormLabel>
        <AddressSelect />
      </FormGroup>

      {/* Front of postcard */}
      <FormGroup>
        <FormLabel>Front:</FormLabel>
        <FormField value={""} autofocus />
      </FormGroup>

      {/* Back of postcard */}
      <FormGroup>
        <FormLabel>Back:</FormLabel>
        <FormField value={""} autofocus />
      </FormGroup>

      {/* Submit */}
      <Button>SUBMIT</Button>
    </div>
  );
};

export default NewPostCardForm;
