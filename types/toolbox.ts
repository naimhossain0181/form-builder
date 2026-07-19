import { LucideIcon } from "lucide-react";
import { BuilderNodeType } from "./builder";

export type ToolboxCategory =
  | "Layout"
  | "Basic"
  | "Advanced";

export interface ToolboxItem {
  id: string;

  type: BuilderNodeType;

  title: string;

  category: ToolboxCategory;

  icon: LucideIcon;
}