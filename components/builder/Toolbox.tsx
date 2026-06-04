"use client";

import { useBuilderStore } from "@/store/builderStore";
import { FormFieldType } from "@/types/form";

const FIELD_TYPES = ["text", "email", "number", "textarea", "select"];

export default function Toolbox() {
  const addField = useBuilderStore((s) => s.addField);

  const handleAdd = (type: string) => {
    const id = crypto.randomUUID(); // ✅ safe here (event handler)

    addField({
      id,
      name: `${type}_${id.slice(0, 8)}`,
      label: type.toUpperCase(),
      type: type as FormFieldType,
      required: false,
    });
  };

  return (
    <div className="p-3 border-r w-60">
      <h3 className="font-bold mb-3">Fields</h3>

      {FIELD_TYPES.map((type) => (
        <button
          key={type}
          onClick={() => handleAdd(type)}
          className="block w-full p-2 mb-2 border rounded"
        >
          {type}
        </button>
      ))}
    </div>
  );
}
