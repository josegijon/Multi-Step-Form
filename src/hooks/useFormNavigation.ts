import { useEffect, useState } from "react";
import { TOTAL_STEPS } from "../constants/formSteps";
import { validateStep1, validateStep2, validateStep4 } from "../utils/validation";
import type { FormDataType } from "../types/form.types";
import { STORAGE_STEP_KEY } from "../constants/storageKeys";

interface Props {
    data: FormDataType;
}

export const useFormNavigation = ({ data }: Props) => {

    const getMaxValidStep = (): number => {
        if (!validateStep1(data)) return 1;
        if (!validateStep2(data)) return 2;
        return TOTAL_STEPS;
    };

    const [currentStep, setCurrentStep] = useState(() => {
        const storedStep = Number(localStorage.getItem(STORAGE_STEP_KEY));
        if (!storedStep || storedStep < 1 || storedStep > TOTAL_STEPS) {
            return 1;
        }
        return storedStep;
    });

    const [direction, setDirection] = useState<1 | -1>(1);

    useEffect(() => {
        const maxValidStep = getMaxValidStep();

        if (currentStep > maxValidStep) {
            setCurrentStep(maxValidStep);
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem(STORAGE_STEP_KEY, String(currentStep));
    }, [currentStep]);


    const canProceedToNextStep = (): boolean => {
        switch (currentStep) {
            case 1:
                return validateStep1(data);
            case 2:
                return validateStep2(data);
            case 4:
                return validateStep4(data);
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
        goToStep,
    }
}
