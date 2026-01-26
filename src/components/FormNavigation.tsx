import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { TOTAL_STEPS } from "../constants/formSteps";
import { STORAGE_KEYS, STORAGE_STEP_KEY } from "../constants/storageKeys";

interface Props {
    currentStep: number;
    canProceedToNext: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

const baseButtonStyles = "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all justify-center w-full 3xs:w-fit";

const secondaryButtonStyles = `${baseButtonStyles} text-black-02 border border-[#e5e7eb] bg-white hover:bg-slate-50 cursor-pointer`;

const getPrimaryButtonStyles = (isEnabled: boolean) =>
    `${baseButtonStyles} text-white font-bold shadow-md ${isEnabled
        ? "shadow-blue-primary/20 bg-blue-primary hover:bg-[#1a7cd8] hover:-translate-y-px cursor-pointer"
        : "bg-gray-400 cursor-not-allowed"
    }`;


export const FormNavigation = ({ currentStep, canProceedToNext, onPrevious, onNext }: Props) => {

    const hasPreviousStep = currentStep > 1;
    const isLastStep = currentStep === TOTAL_STEPS;

    const containerJustify = hasPreviousStep ? 'justify-between' : 'justify-end';
    const primaryLabel = isLastStep ? 'Complete Registration' : 'Next';

    const handleFinalSubmit = () => {
        if (!canProceedToNext) return;

        localStorage.removeItem(STORAGE_STEP_KEY);
        localStorage.removeItem(STORAGE_KEYS.FORM_DATA);
        onNext();
    };

    const handlePrimaryClick = () => {
        if (!canProceedToNext) return;

        isLastStep ? handleFinalSubmit() : onNext();
    };

    return (
        <div className={`flex flex-col 3xs:flex-row items-center gap-2 w-full max-w-200 mx-auto ${containerJustify}`}>
            {hasPreviousStep && (
                <button
                    className={secondaryButtonStyles}
                    type="button"
                    onClick={onPrevious}
                >
                    <ArrowLeft size={18} />
                    Previous
                </button>
            )}

            <button
                className={getPrimaryButtonStyles(canProceedToNext)}
                type={isLastStep ? 'submit' : 'button'}
                onClick={handlePrimaryClick}
            >
                {primaryLabel}

                {isLastStep ? (
                    <span className={`bg-white rounded-full p-1 ${canProceedToNext ? 'text-blue-primary' : 'text-gray-400'}`}>
                        <Check size={12} />
                    </span>
                ) : (
                    <ArrowRight size={18} />
                )}
            </button >
        </div >
    );
};
