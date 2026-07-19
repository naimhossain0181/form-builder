"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function PropertiesPanel() {
  const { schema, selectedNodeId, updateNode } = useBuilderStore();

  const node = selectedNodeId
    ? schema.nodes[selectedNodeId]
    : null;

  if (!node) {
    return (
      <aside className="border-l p-4">
        <p className="text-sm text-gray-500">
          No component selected
        </p>
      </aside>
    );
  }

  return (
    <aside className="border-l p-4">
      <h2 className="mb-4 text-lg font-semibold">
        Properties
      </h2>

      <label className="mb-1 block text-sm">
        Label
      </label>

      <input
        className="mb-4 w-full rounded border p-2"
        value={(node.props.label as string) ?? ""}
        onChange={(e) =>
          updateNode(node.id, {
            label: e.target.value,
          })
        }
      />

      <label className="mb-1 block text-sm">
        Placeholder
      </label>

      <input
        className="w-full rounded border p-2"
        value={(node.props.placeholder as string) ?? ""}
        onChange={(e) =>
          updateNode(node.id, {
            placeholder: e.target.value,
          })
        }
      />
    </aside>
  );
}