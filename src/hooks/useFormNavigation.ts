import { useState } from "react";
import { TOTAL_STEPS } from "../constants/formSteps";
import { validateStep1, validateStep2 } from "../utils/validation";
import type { FormDataType } from "../types/form.types";

interface Props {
    data: FormDataType;
}

export const useFormNavigation = ({ data }: Props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState<1 | -1>(1);

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

    const handleNextStep = () => {
        if (!canProceedToNextStep() || currentStep >= TOTAL_STEPS) return;
        setDirection(1);
        setCurrentStep(prev => prev + 1);
    };

    const handlePreviousStep = () => {
        if (currentStep <= 1) return;
        setDirection(-1);
        setCurrentStep(prev => prev - 1);
    };

    const goToStep = (step: number) => {
        if (step === currentStep || step < 1 || step > TOTAL_STEPS) return;
        setDirection(step > currentStep ? 1 : -1);
        setCurrentStep(step);
    };

    return {
        currentStep,
        direction,

        canProceedToNextStep,
        handlePreviousStep,
        handleNextStep,
        goToStep
    }
}
