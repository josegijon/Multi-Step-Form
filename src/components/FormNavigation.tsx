import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { TOTAL_STEPS } from "../constants/formSteps";

interface Props {
    currentStep: number;
    onPrevious: () => void;
    onNext: () => void;
}

export const FormNavigation = ({ currentStep, onPrevious, onNext }: Props) => {

    const hasPreviousStep = currentStep > 1;
    const isLastStep = currentStep === TOTAL_STEPS;

    const containerJustify = hasPreviousStep ? 'justify-between' : 'justify-end';
    const primaryLabel = isLastStep ? 'Complete Registration' : 'Next';

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
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-blue-primary font-bold shadow-md shadow-blue-primary/20 transition-all cursor-pointer
            hover:bg-[#1a7cd8] hover:-translate-y-px"
                type={isLastStep ? 'submit' : 'button'}
                onClick={onNext}
            >
                {primaryLabel}

                {isLastStep
                    ? <div className="bg-white rounded-full p-1 text-blue-primary">
                        <Check size={12} />
                    </div>
                    : <ArrowRight size={18} />
                }
            </button>
        </div>
    )
}
