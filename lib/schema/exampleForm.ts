import { FormSchema } from "@/types/form";

export const exampleForm: FormSchema = {
  id: "user-form",
  title: "User Registration",
  description: "Create your account",
  fields: [
    {
      id: "name",
      name: "name",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your name",
      required: true,
      validation: {
        minLength: 3,
      },
    },

    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "example@gmail.com",
      required: true,
    },

    {
      id: "role",
      name: "role",
      type: "select",
      label: "Role",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },

    {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      required: true,
      validation: {
        minLength: 6,
      },
    },
  ],
};
