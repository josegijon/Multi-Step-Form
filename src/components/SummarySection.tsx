interface SummarySectionProps {
    title: string;
    children: React.ReactNode;
}

export const SummarySection = ({ title, children }: SummarySectionProps) => (
    <section className={`flex flex-col gap-6 p-2 sm:p-4 md:p-8`}>
        <h2 className="text-black-02 text-lg font-bold">
            {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {children}
        </div>
    </section>
)
