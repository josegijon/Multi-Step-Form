import type { FormDataType, FormFieldValue } from "./form.types";

export interface StepProps {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: FormFieldValue) => void;
    touched?: Record<string, boolean>;
    handleBlur?: (field: keyof FormDataType) => void;
}