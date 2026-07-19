import { create } from "zustand";
import {
  BuilderNode,
  BuilderNodeType,
  BuilderSchema,
} from "@/types/builder";

type BuilderStore = {
  schema: BuilderSchema;

  selectedNodeId: string | null;

  createNode: (type: BuilderNodeType) => BuilderNode;

  insertNode: (
    parentId: string | null,
    node: BuilderNode,
    index?: number,
  ) => void;

  updateNode: (
    id: string,
    props: Partial<BuilderNode["props"]>,
  ) => void;

  removeNode: (id: string) => void;

  moveNode: (
    nodeId: string,
    newParentId: string | null,
    index: number,
  ) => void;

  selectNode: (id: string | null) => void;

  setSchema: (schema: BuilderSchema) => void;
};

export const useBuilderStore = create<BuilderStore>((set) => ({
  schema: {
    rootIds: [],
    nodes: {},
  },

  selectedNodeId: null,

  createNode: (type) => ({
    id: crypto.randomUUID(),
    type,
    parentId: null,
    children: [],
    props: {},
  }),

  insertNode: (parentId, node) =>
    set((state) => {
      const schema = structuredClone(state.schema);

      schema.nodes[node.id] = node;

      if (parentId === null) {
        schema.rootIds.push(node.id);
      } else {
        schema.nodes[parentId].children.push(node.id);
        schema.nodes[node.id].parentId = parentId;
      }

      return { schema };
    }),

  updateNode: (id, props) =>
    set((state) => {
      const schema = structuredClone(state.schema);

      schema.nodes[id].props = {
        ...schema.nodes[id].props,
        ...props,
      };

      return { schema };
    }),

  removeNode: (id) =>
    set((state) => {
      const schema = structuredClone(state.schema);

      delete schema.nodes[id];

      schema.rootIds = schema.rootIds.filter((x) => x !== id);

      return { schema };
    }),

  moveNode: () => {
    // TODO: dnd-kit implementation
  },

  selectNode: (id) => ({
    selectedNodeId: id,
  }),

  setSchema: (schema) => ({
    schema,
  }),
}));