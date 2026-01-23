import { useState } from "react";
import type { FormDataType } from "../types/form.types";

export const useTouched = () => {
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleBlur = (field: keyof FormDataType) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };
    return {
        touched,
        handleBlur
    }
}
