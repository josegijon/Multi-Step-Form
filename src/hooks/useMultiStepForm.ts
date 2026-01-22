import { useState } from "react";
import type { FormDataType } from "../types/form.types";

export const useMultiStepForm = () => {

    const [formData, setFormData] = useState<FormDataType>(() => ({
        fullName: "",
        email: "",
        birthDate: "",
        username: "",
        password: "",
        confirmPassword: "",
        interests: [],
        newsletter: false,
        theme: 'light'
    }));

    const updateFormData = (field: keyof FormDataType, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return {
        formData,
        updateFormData,
    }
}
