export type FieldValue =
  | string
  | number
  | boolean
  | string[]
  | null
  | undefined;
export type FormFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio";

export type FormField = {
  id: string;
  name: string;

  type: FormFieldType;

  label: string;

  placeholder?: string;
  required?: boolean;

  defaultValue?: FieldValue;

  disabled?: boolean;

  helperText?: string;

  // 🔥 SELECT / RADIO / CHECKBOX OPTIONS
  options?: {
    label: string;
    value: string | number;
  }[];

  // 🔥 VALIDATION SYSTEM
  validation?: {
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    customError?: string;
  };

  // 🔥 CONDITIONAL LOGIC
  conditional?: {
    showIf?: {
      field: string;
      equals: FieldValue;
    };
  };

  // 🔥 UI CONTROL
  ui?: {
    colSpan?: number;
    hidden?: boolean;
  };
};

export type FormSchema = {
  id?: string;
  title: string;
  description?: string;

  fields: FormField[];
};

export type FormData = Record<string, FieldValue>;
