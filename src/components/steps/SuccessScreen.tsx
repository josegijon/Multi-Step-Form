import confetti from "canvas-confetti";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const fireConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.1, y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6']
    });

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.9, y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'],
    });

    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 100,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'],
        });
    }, 200);
}


export const SuccessScreen = () => {

    useEffect(() => {
        fireConfetti();
    }, []);


    const handleStartOver = () => {
        window.location.reload();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-12 flex flex-col items-center gap-6 max-w-200 mx-auto w-full text-center"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-emerald-100 text-emerald-600 rounded-full p-4"
            >
                <CheckCircle size={48} />
            </motion.div>

            <header className="flex flex-col gap-2">
                <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                    Registration Complete!
                </h1>
                <p className="text-[#617589] text-base font-normal leading-relaxed">
                    Thank you for registering. Your account has been created successfully.
                </p>
            </header>

            <button
                onClick={handleStartOver}
                className="mt-4 px-8 py-3 bg-blue-primary text-white font-bold rounded-lg hover:bg-[#1a7cd8] transition-all cursor-pointer"
            >
                Start Over
            </button>
        </motion.div>
    );
};