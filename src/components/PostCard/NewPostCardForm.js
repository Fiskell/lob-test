import React, { useState } from "react";
import AddressSelect from "components/AddressSelect/AddressSelect";
import { FormGroup, FormLabel, FormField, Button } from "components/shared";

const NewPostCardForm = () => {
  const FIELDS = {
    DESCRIPTION: "description",
    TO: "to",
    FROM: "from",
    FRONT: "front",
    BACK: "back",
  };

  const [form, setForm] = useState({
    [FIELDS.DESCRIPTION]: "",
    [FIELDS.TO]: null,
    [FIELDS.FROM]: null,
    [FIELDS.FRONT]: "",
    [FIELDS.BACK]: "",
  });
  const [disabled, setDisabled] = useState(false);

  const setField = (field, val) => {
    setForm({ ...form, [field]: val });
  };

  const handleSubmit = () => {
    // Validation here
    console.log(form);
  };

  return (
    <div className="border-2 border-blue-200 rounded-lg w-1/2 p-8 shadow-xl bg-white">
      {/* Description */}
      <FormGroup>
        <FormLabel>Description:</FormLabel>
        <FormField
          value={form.description}
          onChange={(e) => setField(FIELDS.DESCRIPTION, e.target.value)}
          autoFocus
        />
      </FormGroup>

      {/* To address */}
      <FormGroup>
        <FormLabel>To:</FormLabel>
        <AddressSelect onChange={(address) => setField(FIELDS.FROM, address)} />
      </FormGroup>

      {/* From address */}
      <FormGroup>
        <FormLabel>From:</FormLabel>
        <AddressSelect onChange={(address) => setField(FIELDS.FROM, address)} />
      </FormGroup>

      {/* Front of postcard */}
      <FormGroup>
        <FormLabel>Front:</FormLabel>
        <FormField
          value={form.front}
          onChange={(e) => setField(FIELDS.FRONT, e.target.value)}
        />
      </FormGroup>

      {/* Back of postcard */}
      <FormGroup>
        <FormLabel>Back:</FormLabel>
        <FormField
          value={form.back}
          onChange={(e) => setField(FIELDS.BACK, e.target.value)}
        />
      </FormGroup>

      {/* Submit */}
      <Button onClick={handleSubmit} disabled={disabled}>
        SUBMIT
      </Button>
    </div>
  );
};

export default NewPostCardForm;
