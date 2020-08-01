import React, { useState } from "react";
import AddressSelect from "components/AddressSelect/AddressSelect";
import {
  FormGroup,
  FormLabel,
  FormField,
  FormResponse,
  FormHeader,
  Button,
} from "components/shared";
import lobApi from "api/lobApi";

const FIELDS = {
  DESCRIPTION: "description",
  TO: "to",
  FROM: "from",
  FRONT: "front",
  BACK: "back",
};
const NewPostCardForm = () => {
  const [form, setForm] = useState({
    [FIELDS.DESCRIPTION]: "",
    [FIELDS.TO]: null,
    [FIELDS.FROM]: null,
    [FIELDS.FRONT]: "",
    [FIELDS.BACK]: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const setField = (field, val) => {
    setForm({ ...form, [field]: val });
  };

  const handleSubmit = () => {
    // Validation check here
    const api = new lobApi();

    setLoading(true);
    api.createPostCard(form).then(
      (resp) => {
        setLoading(false);
        setResponse({ success: true });
        console.log(resp);
      },
      (err) => {
        console.log(err);

        setResponse({
          success: false,
          message: err.response.data.error.message,
        });
        setLoading(false);
      }
    );
  };

  return (
    <div className="border-2 border-blue-200 rounded-lg w-1/2 shadow-xl bg-white">
      <FormHeader>Create a postcard</FormHeader>
      <div className="p-8">
        {/* Description */}
        <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormField
            value={form.description}
            onChange={(e) => setField(FIELDS.DESCRIPTION, e.target.value)}
            maxLength={255}
            autoFocus
          />
        </FormGroup>

        {/* To address */}
        <FormGroup>
          <FormLabel>To:</FormLabel>
          <AddressSelect onChange={(address) => setField(FIELDS.TO, address)} />
        </FormGroup>

        {/* From address */}
        <FormGroup>
          <FormLabel>From:</FormLabel>
          <AddressSelect
            onChange={(address) => setField(FIELDS.FROM, address)}
          />
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

        <FormResponse className="mb-4" response={response} />

        {/* Submit */}
        <Button onClick={handleSubmit} disabled={loading}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default NewPostCardForm;
