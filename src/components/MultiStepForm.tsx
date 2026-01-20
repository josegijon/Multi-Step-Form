import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { Header } from './Header';
import { useState } from "react"

export const MultiStepForm = () => {

    const [currentStep, setCurrentStep] = useState(4);

    return (
        <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4 pb-8">
            <Header />
            <ProgressBar />
            {currentStep === 1 ? <Step1Personal /> : ''}
            {currentStep === 2 ? <Step2Professional /> : ''}
            {currentStep === 3 ? <Step3Preferences /> : ''}
            {currentStep === 4 ? <Step4Summary /> : ''}
            <FormNavigation currentStep={currentStep} />
        </main>
    )
}
