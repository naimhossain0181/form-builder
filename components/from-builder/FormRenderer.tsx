"use client";

import { useState } from "react";
import type { FormSchema, FormField, FormData, FieldValue } from "@/types/form";
import FormFieldComponent from "./FormField";

type Props = {
  schema: FormSchema;
};

export default function FormRenderer({ schema }: Props) {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: FieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    schema.fields.forEach((field: FormField) => {
      const value = formData[field.name];

      if (field.required && (value === undefined || value === "")) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form Submitted:", formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">{schema.title}</h2>

      {schema.fields.map((field) => (
        <FormFieldComponent
          key={field.name}
          field={field}
          value={formData[field.name]}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}

      <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
