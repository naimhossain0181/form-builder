"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function PropertiesPanel() {
  const { schema, selectedFieldId, updateField } = useBuilderStore();

  const field = schema.fields.find((f) => f.id === selectedFieldId);

  if (!field) {
    return <div className="w-80 p-4">No field selected</div>;
  }

  return (
    <div className="w-80 p-4 border-l">
      <h3 className="font-bold mb-3">Properties</h3>

      <input
        className="border p-2 w-full mb-2"
        value={field.label}
        onChange={(e) => updateField(field.id, { label: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        value={field.placeholder || ""}
        onChange={(e) =>
          updateField(field.id, {
            placeholder: e.target.value,
          })
        }
      />
    </div>
  );
}
