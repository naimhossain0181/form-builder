import {
  Type,
  Mail,
  Hash,
  AlignLeft,
  List,
  CheckSquare,
  Circle,
  LayoutPanelTop,
  Rows3,
  Columns2,
} from "lucide-react";

import { ToolboxItem } from "@/types/toolbox";

export const TOOLBOX_ITEMS: ToolboxItem[] = [
  // ---------- Layout ----------

  {
    id: "section",
    type: "section",
    title: "Section",
    category: "Layout",
    icon: LayoutPanelTop,
  },

  {
    id: "row",
    type: "row",
    title: "Row",
    category: "Layout",
    icon: Rows3,
  },

  {
    id: "column",
    type: "column",
    title: "Column",
    category: "Layout",
    icon: Columns2,
  },

  // ---------- Basic ----------

  {
    id: "text",
    type: "text",
    title: "Text Input",
    category: "Basic",
    icon: Type,
  },

  {
    id: "email",
    type: "email",
    title: "Email",
    category: "Basic",
    icon: Mail,
  },

  {
    id: "number",
    type: "number",
    title: "Number",
    category: "Basic",
    icon: Hash,
  },

  {
    id: "textarea",
    type: "textarea",
    title: "Textarea",
    category: "Basic",
    icon: AlignLeft,
  },

  {
    id: "select",
    type: "select",
    title: "Select",
    category: "Basic",
    icon: List,
  },

  {
    id: "checkbox",
    type: "checkbox",
    title: "Checkbox",
    category: "Basic",
    icon: CheckSquare,
  },

  {
    id: "radio",
    type: "radio",
    title: "Radio",
    category: "Basic",
    icon: Circle,
  },
];