import type { FormDataType } from "../../types/form.types";
import { getInputStyles } from "../../utils/styles";
import { getFieldError } from "../../utils/validation";

interface FormInputProps {
    id: keyof FormDataType;
    label: string;
    type: 'text' | 'email' | 'date' | 'password';
    value: string;
    placeholder?: string;
    onChange: (field: keyof FormDataType, value: string) => void;
    onBlur: (field: keyof FormDataType) => void;
    touched: boolean;
    formData?: FormDataType;
}

export const FormInput = ({
    id,
    label,
    type,
    value,
    placeholder,
    onChange,
    onBlur,
    touched,
    formData,
}: FormInputProps) => {
    const error = touched ? getFieldError(id, value, formData) : null;

    return (
        <label
            className="flex flex-col gap-2"
            htmlFor={id}
        >
            <span className="text-black-01 text-sm font-semibold">
                {label}
            </span>
            <div className="flex flex-col gap-1">
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(id, e.target.value)}
                    onBlur={() => onBlur(id)}
                    className={getInputStyles(!!error)}
                    placeholder={placeholder}
                    required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </label>
    )
}
