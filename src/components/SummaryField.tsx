interface SummaryFieldProps {
    label: string;
    children: React.ReactNode;
}

export const SummaryField = ({ label, children }: SummaryFieldProps) => (
    <div className="flex flex-col gap-1">
        <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
            {label}
        </p>

        <div className="text-black-02 text-base font-medium">
            {children}
        </div>
    </div>
);
