import { FormNavigation } from "./FormNavigation"
import { ProgressBar } from "./ProgressBar"
import { Step1Personal } from "./steps/Step1Personal"
import { Step2Professional } from "./steps/Step2Professional"
import { Step3Preferences } from "./steps/Step3Preferences"
import { Step4Summary } from "./steps/Step4Summary"
import { SuccessScreen } from "./steps/SuccessScreen"
import { Layout } from "./Layout"
import { useFormNavigation } from "../hooks/useFormNavigation"
import { useMultiStepForm } from "../hooks/useMultiStepForm"
import { useTouched } from "../hooks/useTouched"
import { useFormSubmit } from "../hooks/useFormSubmit"
import { AnimatePresence, motion } from "motion/react"
import { stepTransition, stepVariants } from "../animations/formStep.variants"
import { ConfirmModal } from "./ui/ConfirmModal"
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
    const { isModalOpen, isCompleted, openModal, closeModal, confirmSubmit } = useFormSubmit();

    const StepComponent = STEP_COMPONENTS[currentStep - 1];

    if (isCompleted) {
        return (
            <Layout>
                <SuccessScreen />
            </Layout>
        );
    }

    return (
        <Layout>
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
                            onSubmit={openModal}
                        />
                    </motion.div>
                </AnimatePresence>
            </section>

            <ConfirmModal
                isOpen={isModalOpen}
                onConfirm={confirmSubmit}
                onCancel={closeModal}
            />
        </Layout>
    );
};