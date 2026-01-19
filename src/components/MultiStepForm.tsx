import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"

export const MultiStepForm = () => {
    return (
        <div className="py-10 px-4 font-inter bg-[#f3f4f6] min-h-screen">
            <Step2Professional />
        </div>
    )
}
