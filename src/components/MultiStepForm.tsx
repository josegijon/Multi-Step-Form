import { useState } from "react"
import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { SuccessScreen } from "./steps/SuccessScreen"
import { Header } from './Header';
import { useFormNavigation } from "../hooks/useFormNavigation"
import { useMultiStepForm } from "../hooks/useMultiStepForm"
import { useTouched } from "../hooks/useTouched"
import { AnimatePresence, motion } from "motion/react"
import { stepTransition, stepVariants } from "../animations/formStep.variants"
import { ConfirmModal } from "./ui/ConfirmModal"
import { STORAGE_KEYS, STORAGE_STEP_KEY } from "../constants/storageKeys"
import type { StepProps } from "../types/step.types"

const STEP_COMPONENTS: React.FC<StepProps>[] = [
    Step1Personal,
    Step2Professional,
    Step3Preferences,
    Step4Summary,
];

export const MultiStepForm = () => {
    const { formData, updateFormData } = useMultiStepForm();
    const { touched, handleBlur } = useTouched();
    const { currentStep, direction, handlePreviousStep, handleNextStep, canProceedToNextStep } = useFormNavigation({ data: formData });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const StepComponent = STEP_COMPONENTS[currentStep - 1];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmSubmit = () => {
        localStorage.removeItem(STORAGE_STEP_KEY);
        localStorage.removeItem(STORAGE_KEYS.FORM_DATA);
        setIsModalOpen(false);
        setIsCompleted(true);
    };

    if (isCompleted) {
        return (
            <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4 p-4 pb-8">
                <Header />
                <SuccessScreen />
            </main>
        );
    }

    return (
        <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4 p-4 pb-8">
            <Header />
            <ProgressBar step={currentStep} />

            <section className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={stepTransition}
                        className="flex flex-col gap-4"
                    >
                        <StepComponent
                            data={formData}
                            onChange={updateFormData}
                            touched={touched}
                            handleBlur={handleBlur}
                        />

                        <FormNavigation
                            currentStep={currentStep}
                            canProceedToNext={canProceedToNextStep()}
                            onPrevious={handlePreviousStep}
                            onNext={handleNextStep}
                            onSubmit={handleOpenModal}
                        />
                    </motion.div>
                </AnimatePresence>
            </section>

            <ConfirmModal
                isOpen={isModalOpen}
                onConfirm={handleConfirmSubmit}
                onCancel={handleCloseModal}
            />
        </main>
    )
}