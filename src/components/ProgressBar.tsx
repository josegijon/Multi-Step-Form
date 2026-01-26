import { TOTAL_STEPS } from "../constants/formSteps";

interface Props {
    step: number;
}

export const ProgressBar = ({ step }: Props) => {

    const calculatePercent = () => {
        const percent = (step * 100) / TOTAL_STEPS;
        return `${Number(percent.toFixed(2))}%`;
    }

    return (
        <div className="flex flex-col gap-2 max-w-200 mx-auto w-full p-4">
            <div className="flex gap-6 justify-between items-end">
                <p className="text-black-02 text-sm font-semibold uppercase tracking-wide">
                    Step {step} of {TOTAL_STEPS}
                </p>
                <p className="text-blue-primary text-sm font-bold">
                    {calculatePercent()}
                </p>
            </div>

            <div className="h-2 w-full bg-[#dbe0e6] rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-primary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${calculatePercent()}` }}
                >
                </div>
            </div>
        </div>
    )
}
