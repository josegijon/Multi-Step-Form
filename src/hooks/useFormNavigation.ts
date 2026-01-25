import { useState } from "react";
import { TOTAL_STEPS } from "../constants/formSteps";
import { validateStep1, validateStep2 } from "../utils/validation";
import type { FormDataType } from "../types/form.types";

interface Props {
    data: FormDataType;
}

export const useFormNavigation = ({ data }: Props) => {
    const [currentStep, setCurrentStep] = useState(1);

    const canProceedToNextStep = (): boolean => {
        switch (currentStep) {
            case 1:
                return validateStep1(data);
            case 2:
                return validateStep2(data);
            default:
                return true;
        }
    }

    const handlePreviousStep = () => {
        setCurrentStep((prev) =>
            prev > 1 ? prev - 1 : prev
        );
    };

    const handleNextStep = () => {
        if (!canProceedToNextStep()) {
            return;
        }

        setCurrentStep((prev) =>
            prev < TOTAL_STEPS ? prev + 1 : prev
        );
    };

    return {
        currentStep,

        canProceedToNextStep,
        handlePreviousStep,
        handleNextStep
    }
}
