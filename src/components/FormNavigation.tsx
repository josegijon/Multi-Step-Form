import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { TOTAL_STEPS } from "../constants/formSteps";
import { STORAGE_KEYS, STORAGE_STEP_KEY } from "../constants/storageKeys";

interface Props {
    currentStep: number;
    canProceedToNext: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

export const FormNavigation = ({ currentStep, canProceedToNext, onPrevious, onNext }: Props) => {

    const hasPreviousStep = currentStep > 1;
    const isLastStep = currentStep === TOTAL_STEPS;

    const containerJustify = hasPreviousStep ? 'justify-between' : 'justify-end';
    const primaryLabel = isLastStep ? 'Complete Registration' : 'Next';

    const handleFinalSubmit = () => {
        localStorage.removeItem(STORAGE_STEP_KEY);
        localStorage.removeItem(STORAGE_KEYS.FORM_DATA);
    };


    return (
        <div className={`flex items-center gap-2 w-full max-w-200 mx-auto
        ${containerJustify}`}>
            {hasPreviousStep &&
                <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-black-02 border border-[#e5e7eb] bg-white font-medium transition-colors cursor-pointer
                    hover:bg-slate-50"
                    type="button"
                    onClick={onPrevious}
                >
                    <ArrowLeft size={18} />
                    Previous
                </button>
            }

            <button
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white  font-bold shadow-md transition-all 
                ${canProceedToNext === false
                        ? 'bg-gray-400'
                        : 'shadow-blue-primary/20 bg-blue-primary hover:bg-[#1a7cd8] hover:-translate-y-px cursor-pointer'
                    }`}
                type={isLastStep ? 'submit' : 'button'}
                onClick={isLastStep ? handleFinalSubmit : onNext}
            >
                {primaryLabel}

                {isLastStep
                    ? <div className={`bg-white rounded-full p-1 
                    ${canProceedToNext
                            ? 'text-blue-primary'
                            : 'text-gray-400'
                        }
                    `}>
                        <Check size={12} />
                    </div>
                    : <ArrowRight size={18} />
                }
            </button>
        </div>
    )
}
