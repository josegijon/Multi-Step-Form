import { useEffect, useState } from "react";
import type { FormDataType } from "../types/form.types";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { initialFormData } from "../constants/initialFormData";

export const useMultiStepForm = () => {

    const [formData, setFormData] = useState<FormDataType>(() => {
        const savedData = localStorage.getItem(STORAGE_KEYS.FORM_DATA);
        return savedData ? JSON.parse(savedData) : initialFormData;
    });

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEYS.FORM_DATA,
            JSON.stringify(formData)
        );
    }, [formData])

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
