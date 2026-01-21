import { useState } from "react";
import { TOTAL_STEPS } from "../constants/formSteps";

export const useFormNavigation = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handlePreviousStep = () => {
        setCurrentStep((prev) =>
            prev > 1 ? prev - 1 : prev
        );
    };

    const handleNextStep = () => {
        setCurrentStep((prev) =>
            prev < TOTAL_STEPS ? prev + 1 : prev
        );
    };

    return {
        currentStep,

        handlePreviousStep,
        handleNextStep
    }
}
