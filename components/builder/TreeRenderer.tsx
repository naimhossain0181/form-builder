"use client";

import { useBuilderStore } from "@/store/builderStore";
import TreeNode from "./TreeNode";

export default function TreeRenderer() {
  const rootIds = useBuilderStore((s) => s.schema.rootIds);

  if (rootIds.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center rounded-lg border-2 border-dashed">
        Drop components here
      </div>
    );
  }

  return (
    <>
      {rootIds.map((id) => (
        <TreeNode
          key={id}
          nodeId={id}
        />
      ))}
    </>
  );
}