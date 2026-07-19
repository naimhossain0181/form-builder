"use client";

import { useBuilderStore } from "@/store/builderStore";
import { TOOLBOX_ITEMS } from "../constants/toolbox";

export default function Toolbox() {
  const createNode = useBuilderStore((s) => s.createNode);

  return (
    <aside className="border-r p-4">
      <h2 className="mb-4 text-lg font-semibold">Toolbox</h2>

      <div className="space-y-2">
        {TOOLBOX_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => createNode(item.type)}
            className="flex w-full items-center rounded-lg border p-3 text-left hover:bg-gray-100"
          >
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}