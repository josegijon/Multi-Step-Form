import type { FormDataType } from "../types/form.types";

interface FieldConfig {
    id: keyof FormDataType;
    label: string;
    type: "text" | "email" | "date" | "password";
    placeholder?: string;
}

export const STEP1_FIELDS: FieldConfig[] = [
    { id: "fullName", label: "Full Name", type: "text", placeholder: "e.g., Jane Doe" },
    { id: "email", label: "Email", type: "email", placeholder: "new@email.com" },
    { id: "birthDate", label: "Birth Date", type: "date" },
];

export const STEP2_FIELDS: FieldConfig[] = [
    { id: "username", label: "Username", type: "text", placeholder: "Enter unique username" },
    { id: "password", label: "Password", type: "password", placeholder: "********" },
    { id: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "********" },
];