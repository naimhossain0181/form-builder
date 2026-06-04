import { create } from "zustand";
import type { FormField, FormSchema } from "@/types/form";

type BuilderState = {
  schema: FormSchema;

  selectedFieldId: string | null;

  addField: (field: FormField) => void;
  updateField: (id: string, data: Partial<FormField>) => void;
  removeField: (id: string) => void;
  selectField: (id: string | null) => void;
  setSchema: (schema: FormSchema) => void;
};

export const useBuilderStore = create<BuilderState>((set) => ({
  schema: {
    title: "Untitled Form",
    fields: [],
  },

  selectedFieldId: null,

  addField: (field) =>
    set((state) => ({
      schema: {
        ...state.schema,
        fields: [...state.schema.fields, field],
      },
    })),

  updateField: (id, data) =>
    set((state) => ({
      schema: {
        ...state.schema,
        fields: state.schema.fields.map((f) =>
          f.id === id ? { ...f, ...data } : f,
        ),
      },
    })),

  removeField: (id) =>
    set((state) => ({
      schema: {
        ...state.schema,
        fields: state.schema.fields.filter((f) => f.id !== id),
      },
    })),

  selectField: (id) => set({ selectedFieldId: id }),

  setSchema: (schema) => set({ schema }),
}));
