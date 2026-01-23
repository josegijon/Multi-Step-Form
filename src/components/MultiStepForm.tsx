import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { Header } from './Header';
import { useFormNavigation } from "../hooks/useFormNavigation"
import { useMultiStepForm } from "../hooks/useMultiStepForm"
import { useTouched } from "../hooks/useTouched"

export const MultiStepForm = () => {
    const { formData, updateFormData } = useMultiStepForm();

    const { currentStep, handlePreviousStep, handleNextStep, canProceedToNextStep } = useFormNavigation({ data: formData });

    const { touched, handleBlur } = useTouched();

    const steps = [
        <Step1Personal
            data={formData}
            onChange={updateFormData}
            touched={touched}
            handleBlur={handleBlur}
        />,
        <Step2Professional
            data={formData}
            onChange={updateFormData}
            touched={touched}
            handleBlur={handleBlur}
        />,
        <Step3Preferences data={formData} onChange={updateFormData} />,
        <Step4Summary data={formData} />
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
