import type { Variants } from "motion";

export const stepVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0
    })
};
