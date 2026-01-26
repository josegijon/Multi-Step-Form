import { SummarySection } from "../SummarySection";
import { SummaryField } from '../SummaryField';
import { Moon, Sun } from "lucide-react";
import { TermCheckbox } from "../TermCheckbox";
import type { StepProps } from "../../types/step.types";


export const Step4Summary = ({ data, onChange }: StepProps) => {

    const isNewsletterEnabled = data.newsletter;

    return (
        <div className="flex flex-col gap-8 w-full max-w-200 mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8">
                <header className="flex flex-col gap-2">
                    <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                        Review your details
                    </h1>
                    <p className="text-[#617589] text-base font-normal leading-relaxed">
                        Please verify that all information provided is correct before completing your registration.
                    </p>
                </header>

                <SummarySection title="Personal Information">
                    <SummaryField label="Full Name">{data.fullName}</SummaryField>
                    <SummaryField label="Email Address">{data.email}</SummaryField>
                    <SummaryField label="Birth Date">{data.birthDate}</SummaryField>
                    <SummaryField label="Username">{data.username}</SummaryField>
                </SummarySection>

                <hr className="border-gray-100" />

                <SummarySection title="Account Preferences">
                    <SummaryField label="Interests">
                        {data.interests?.length > 0 ? (
                            <div className="flex flex-wrap gap-2 mt-1">
                                {data.interests.map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-2.5 py-1 bg-blue-primary/10 text-blue-primary text-xs font-semibold rounded"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <span className="text-gray-400 italic">None selected</span>
                        )}
                    </SummaryField>

                    <SummaryField label="Preferred Theme">
                        <div className="flex items-center gap-2 capitalize">
                            {data.theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                            {data.theme} Mode
                        </div>
                    </SummaryField>

                    <SummaryField label="Newsletter Status">
                        <div className="flex items-center gap-2">
                            <span
                                className={`w-2 h-2 rounded-full ${isNewsletterEnabled ? "bg-emerald-500" : "bg-red-500"
                                    }`}
                            />
                            {isNewsletterEnabled ? "Enabled" : "Disabled"}
                        </div>
                    </SummaryField>
                </SummarySection>
            </div>

            <TermCheckbox
                checked={data.terms}
                onChange={(checked) => onChange("terms", checked)}
            />
        </div >
    )
}
