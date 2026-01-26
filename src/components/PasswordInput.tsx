import { useState } from "react";
import type { FormDataType } from "../types/form.types";
import { getFieldError } from "../utils/validation";
import { Eye, EyeClosed } from "lucide-react";

interface PasswordInputProps {
    id: "password" | "confirmPassword";
    label: string;
    value: string;
    onChange: (field: keyof FormDataType, value: string) => void;
    onBlur: (field: keyof FormDataType) => void;
    touched: boolean;
    formData?: FormDataType;
}

const getInputStyles = (hasError: boolean) =>
    `w-full h-12 px-4 pr-12 rounded-md border bg-white text-black-01 text-base transition-all
    placeholder:text-[#9ca3af] focus:outline-none focus:ring-2
    ${hasError
        ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
        : "border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary"
    }`;

export const PasswordInput = ({
    id,
    label,
    value,
    onChange,
    onBlur,
    touched,
    formData,
}: PasswordInputProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const error = touched ? getFieldError(id, value, formData) : null;

    return (
        <label className="flex flex-col gap-2" htmlFor={id}>
            <span className="text-black-01 text-sm font-semibold">{label}</span>
            <div className="flex flex-col gap-1">
                <div className="relative">
                    <input
                        id={id}
                        type={isVisible ? "text" : "password"}
                        value={value}
                        onChange={(e) => onChange(id, e.target.value)}
                        onBlur={() => onBlur(id)}
                        className={getInputStyles(!!error)}
                        placeholder="********"
                        required
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? <EyeClosed size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </label>
    )
}
