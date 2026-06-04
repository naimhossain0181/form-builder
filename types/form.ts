export type FieldValue = string | number | boolean | null;

export type FormFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "textarea";

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
};

export type FormSchema = {
  title: string;
  fields: FormField[];
};

export type FormData = Record<string, FieldValue>;
