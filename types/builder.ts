import type { FormField } from "./form";

export type LayoutNodeType = "section" | "row" | "column";

export type BuilderNodeType = LayoutNodeType | FormField["type"];

export interface BuilderNode {
  id: string;

  type: BuilderNodeType;

  parentId: string | null;

  children: string[];

  props: Record<string, unknown>;
}

export interface BuilderSchema {
  rootIds: string[];

  nodes: Record<string, BuilderNode>;
}