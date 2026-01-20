
export const FormNavigation = () => {
    return (
        <div className="flex justify-between items-center gap-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-black-02 border border-[#e5e7eb] bg-white font-medium transition-colors cursor-pointer
            hover:bg-slate-50">
                O Previous
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-blue-primary font-bold shadow-md shadow-blue-primary/20 transition-all cursor-pointer
            hover:bg-[#1a7cd8] hover:-translate-y-px">
                O Next
            </button>
        </div>
    )
}
