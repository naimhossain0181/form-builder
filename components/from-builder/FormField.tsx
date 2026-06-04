"use client";

import type { FormField, FieldValue } from "@/types/form";

type Props = {
  field: FormField;
  value: FieldValue;
  error?: string;
  onChange: (name: string, value: FieldValue) => void;
};

export default function FormFieldComponent({
  field,
  value,
  error,
  onChange,
}: Props) {
  const baseClass =
    "w-full p-2 border rounded-md focus:outline-none focus:ring";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange(field.name, e.target.value);
  };

  return (
    <div className="space-y-1">
      <label className="block font-medium">
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
      </label>

      {field.type === "textarea" ? (
        <textarea
          className={baseClass}
          value={(value as string) ?? ""}
          onChange={handleChange}
        />
      ) : (
        <input
          className={baseClass}
          type={field.type}
          value={(value as string) ?? ""}
          onChange={handleChange}
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
