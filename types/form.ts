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

export interface FormFieldOption {
  label: string;
  value: string | number;
}

export interface FormValidation {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  customError?: string;
}

export interface ConditionalRule {
  field: string;
  equals: FieldValue;
}

export interface FormUI {
  colSpan?: number;
  hidden?: boolean;
}

export interface FormField {
  id: string;

  name: string;

  type: FormFieldType;

  label: string;

  placeholder?: string;

  required?: boolean;

  defaultValue?: FieldValue;

  disabled?: boolean;

  helperText?: string;

  options?: FormFieldOption[];

  validation?: FormValidation;

  conditional?: {
    showIf?: ConditionalRule;
  };

  ui?: FormUI;
}

export interface FormSchema {
  id?: string;

  title: string;

  description?: string;

  fields: FormField[];
}

export type FormData = Record<string, FieldValue>;