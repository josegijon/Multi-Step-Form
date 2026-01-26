interface TermCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const TermCheckbox = ({ checked, onChange }: TermCheckboxProps) => (
    <div className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#e5e7eb] w-full">
        <input
            type="checkbox"
            id="terms"
            className="size-5 rounded border-slate-300 text-blue-primary focus:ring-blue-primary focus:ring-offset-2 cursor-pointer shrink-0 mt-0.5"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            required
        />
        <label htmlFor="terms" className="text-sm text-gray-01 leading-relaxed cursor-pointer">
            I confirm that the information provided above is accurate. I have read and agree to the{" "}
            <a className="text-blue-primary font-medium hover:underline" href="#">
                Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-blue-primary font-medium hover:underline" href="#">
                Privacy Policy
            </a>
            .
        </label>
    </div>
)
