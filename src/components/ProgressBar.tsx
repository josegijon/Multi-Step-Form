
export const ProgressBar = () => {
    return (
        <div className="flex flex-col gap-2 max-w-200 mx-auto w-full">
            <div className="flex gap-6 justify-between items-end">
                <p className="text-black-02 text-sm font-semibold uppercase tracking-wide">
                    Step 1 of 4
                </p>
                <p className="text-blue-primary text-sm font-bold">
                    25%
                </p>
            </div>

            <div className="h-2 w-full bg-[#dbe0e6] rounded-full overflow-hidden">
                <div className="h-full bg-blue-primary rounded-full transition-all duration-500 ease-out w-[25%]">
                </div>
            </div>
        </div>
    )
}
