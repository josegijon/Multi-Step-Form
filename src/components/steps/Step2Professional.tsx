import type { FormDataType } from "../../types/form.types";
import { FormInput } from "../FormInput";
import { PasswordInput } from "../PasswordInput";

interface Props {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: any) => void;
    touched?: Record<string, boolean>;
    handleBlur?: (field: keyof FormDataType) => void;
}

export const Step2Professional = ({ data, onChange, touched = {}, handleBlur = () => { } }: Props) => {
    return (
        <div className="px-4">
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 w-full max-w-200 mx-auto">
                <header className="flex flex-col gap-2">
                    <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                        Account Security
                    </h1>
                    <p className="text-[#617589] text-base font-normal leading-relaxed">
                        Secure your profile with a unique username and password.
                    </p>
                </header>

                <div className="flex flex-col gap-6">
                    <FormInput
                        id="username"
                        label="Username"
                        type="text"
                        value={data.username}
                        placeholder="Enter unique username"
                        onChange={onChange}
                        onBlur={handleBlur}
                        touched={!!touched.username}
                    />

                    <PasswordInput
                        id="password"
                        label="Password"
                        value={data.password}
                        onChange={onChange}
                        onBlur={handleBlur}
                        touched={!!touched.password}
                    />

                    <PasswordInput
                        id="confirmPassword"
                        label="Confirm Password"
                        value={data.confirmPassword}
                        onChange={onChange}
                        onBlur={handleBlur}
                        touched={!!touched.confirmPassword}
                        formData={data}
                    />
                </div>
            </div>
        </div>
    );
};