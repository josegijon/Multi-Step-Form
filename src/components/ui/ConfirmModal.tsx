import { AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useCallback } from "react";
import { overlayVariants, modalVariants, modalTransition } from "../../animations/modal.variants";

interface ConfirmModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmModal = ({ isOpen, onConfirm, onCancel }: ConfirmModalProps) => {
    // Cerrar con Escape
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onCancel();
        }
    }, [onCancel]);

    // Bloquear scroll y añadir listener de Escape
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        variants={overlayVariants}
                        onClick={onCancel}
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 flex flex-col gap-6"
                        variants={modalVariants}
                        transition={modalTransition}
                    >
                        {/* Close button */}
                        <button
                            onClick={onCancel}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            aria-label="Cerrar modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center">
                            <div className="bg-blue-100 text-blue-primary rounded-full p-4">
                                <AlertTriangle size={32} aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center">
                            <h2 id="modal-title" className="text-xl font-bold text-black-01 mb-2">
                                Confirm Registration
                            </h2>
                            <p className="text-gray-01 text-sm leading-relaxed">
                                Are you sure you want to complete your registration?
                                Please make sure all your information is correct before proceeding.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col-reverse sm:flex-row gap-3">
                            <button
                                onClick={onCancel}
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-black-02 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 px-4 py-3 rounded-lg bg-blue-primary text-white font-bold hover:bg-[#1a7cd8] transition-colors cursor-pointer"
                                autoFocus
                            >
                                Confirm & Submit
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};