"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function Canvas() {
  const { schema, selectField } = useBuilderStore();

  return (
    <div className="flex-1 p-4 border min-h-screen">
      <h2 className="text-xl font-bold mb-4">{schema.title}</h2>

      {schema.fields.map((field) => (
        <div
          key={field.id}
          className="p-3 border rounded mb-2 cursor-pointer hover:bg-gray-50"
          onClick={() => selectField(field.id)}
        >
          <p className="font-medium">{field.label}</p>
          <p className="text-sm text-gray-500">{field.type}</p>
        </div>
      ))}
    </div>
  );
}
