interface InterestCheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

const checkboxStyles = `
    flex items-center gap-3 p-4 rounded-lg border border-gray-200 
    bg-white transition-colors cursor-pointer group
    hover:border-blue-primary/30 hover:bg-blue-50/30
`;

const inputStyles = `
    w-5 h-5 rounded border-gray-300 bg-white text-blue-primary
    focus:ring-blue-primary focus:ring-offset-white accent-blue-primary
`;

export const InterestCheckbox = ({ id, label, checked, onChange }: InterestCheckboxProps) => {
    return (
        <label
            className={checkboxStyles}
            htmlFor={id}
        >
            <input
                id={id}
                type="checkbox"
                className={inputStyles}
                checked={checked}
                onChange={onChange}
            />
            <span className="text-slate-700 group-hover:text-black-01 font-medium">
                {label}
            </span>
        </label>
    )
}
