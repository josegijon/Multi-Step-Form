import { STEP1_FIELDS } from "../../constants/formFields";
import type { FormDataType } from "../../types/form.types";
import type { StepProps } from "../../types/step.types";
import { FormInput } from "../FormInput";

export const Step1Personal = ({ data, onChange, touched = {}, handleBlur = () => { } }: StepProps) => {

    return (
        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 max-w-200 mx-auto w-full">
            <header className="flex flex-col gap-2">
                <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                    Personal Info
                </h1>
                <p className="text-[#617589] text-base font-normal leading-relaxed">
                    Please provide your details to set up your profile.
                </p>
            </header>

            <div className="flex flex-col gap-6">
                {STEP1_FIELDS.map((field) => (
                    <FormInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        value={data[field.id] as string}
                        placeholder={field.placeholder}
                        onChange={onChange}
                        onBlur={handleBlur}
                        touched={!!touched[field.id]}
                    />
                ))}
            </div>
        </div>
    )
}
