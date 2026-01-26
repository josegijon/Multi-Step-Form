import type { Variants } from "motion";

export const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
};

export const modalTransition = {
    duration: 0.2,
    ease: "easeOut" as const,
};