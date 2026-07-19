"use client";

import { useBuilderStore } from "@/store/builderStore";

type Props = {
  nodeId: string;
};

export default function TreeNode({
  nodeId,
}: Props) {
  const node = useBuilderStore(
    (s) => s.schema.nodes[nodeId],
  );

  if (!node) return null;

  return (
    <div className="mb-4 rounded border p-4">

      <div className="font-medium">
        {node.type}
      </div>

      {node.children.length > 0 && (
        <div className="ml-6 mt-3 space-y-3">

          {node.children.map((childId) => (
            <TreeNode
              key={childId}
              nodeId={childId}
            />
          ))}

        </div>
      )}

    </div>
  );
}