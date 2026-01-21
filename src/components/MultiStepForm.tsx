import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { Header } from './Header';
import { useFormNavigation } from "../hooks/useFormNavigation"

export const MultiStepForm = () => {

    const { currentStep, handlePreviousStep, handleNextStep } = useFormNavigation();

    const steps = [
        <Step1Personal />,
        <Step2Professional />,
        <Step3Preferences />,
        <Step4Summary />
    ]

    return (
        <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4 pb-8">
            <Header />
            <ProgressBar step={currentStep} />
            {steps[currentStep - 1]}
            <FormNavigation currentStep={currentStep} onPrevious={handlePreviousStep} onNext={handleNextStep} />
        </main>
    )
}
