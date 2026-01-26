import { useState } from "react";
import { STORAGE_KEYS, STORAGE_STEP_KEY } from "../constants/storageKeys";

export const useFormSubmit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const confirmSubmit = () => {
        localStorage.removeItem(STORAGE_STEP_KEY);
        localStorage.removeItem(STORAGE_KEYS.FORM_DATA);
        setIsModalOpen(false);
        setIsCompleted(true);
    };

    return {
        isModalOpen,
        isCompleted,
        openModal,
        closeModal,
        confirmSubmit,
    };
};