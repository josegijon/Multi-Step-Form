import { INTERESTS } from "../../constants/interests";
import type { FormDataType } from "../../types/form.types";
import { InterestCheckbox } from "../InterestCheckbox";
import { ThemeSelect } from "../ThemeSelect";
import { ToggleSwitch } from "../ToggleSwitch";

interface Props {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: any) => void;
}

export const Step3Preferences = ({ data, onChange }: Props) => {

    const handleInterestToggle = (interest: string) => {
        const current = data.interests || [];

        const updated = current.includes(interest)
            ? current.filter(i => i !== interest)
            : [...current, interest];

        onChange("interests", updated);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 w-full max-w-200 mx-auto">
            <header className="flex flex-col gap-2">
                <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                    Set your preferences
                </h1>
                <p className="text-[#617589] text-base font-normal leading-relaxed">
                    Tell us about your interests and choose how you want to see the platform.
                </p>
            </header>

            <div className="flex flex-col gap-6">
                {/* Interests */}
                <h2 className="text-black-01 text-lg font-bold leading-tight ">
                    Interests
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {INTERESTS.map(({ id, label }) => (
                        <InterestCheckbox
                            key={id}
                            id={id}
                            label={label}
                            checked={data.interests?.includes(label) ?? false}
                            onChange={() => handleInterestToggle(label)}
                        />
                    ))}
                </div>

                <hr className="border-gray-100" />

                {/* Newsletter */}
                <ToggleSwitch
                    id="newsletter"
                    title="Newsletter"
                    description="Receive the latest news and professional tips."
                    checked={data.newsletter}
                    onChange={(checked) => onChange("newsletter", checked)}
                />

                <hr className="border-gray-100" />

                {/* Theme */}
                <ThemeSelect
                    value={data.theme}
                    onChange={(value) => onChange("theme", value)}
                />
            </div>
        </div>
    );
};
