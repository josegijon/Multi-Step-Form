import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { Header } from './Header';

export const MultiStepForm = () => {
    return (
        <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4">
            <Header />
            <ProgressBar />
            <Step2Professional />
            <FormNavigation />
        </main>
    )
}
