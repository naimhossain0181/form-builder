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

  // =========================
  // CHECKBOX (separate logic)
  // =========================
  if (field.type === "checkbox") {
    return (
      <div className="space-y-1">
        <label className="flex items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(field.name, e.target.checked)}
          />
          {field.label}
          {field.required && <span className="text-red-500">*</span>}
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }

  // =========================
  // TEXTAREA
  // =========================
  if (field.type === "textarea") {
    return (
      <div className="space-y-1">
        <label className="block font-medium">
          {field.label}
          {field.required && <span className="text-red-500"> *</span>}
        </label>

        <textarea
          className={baseClass}
          value={(value as string) ?? ""}
          placeholder={field.placeholder}
          disabled={field.disabled}
          onChange={(e) => onChange(field.name, e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }

  // =========================
  // DEFAULT INPUTS
  // =========================
  return (
    <div className="space-y-1">
      <label className="block font-medium">
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
      </label>

      <input
        className={baseClass}
        type={field.type}
        value={(value as string | number) ?? ""}
        placeholder={field.placeholder}
        disabled={field.disabled}
        onChange={(e) => onChange(field.name, e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
