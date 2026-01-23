import type { FormDataType } from "../../types/form.types";
import { getFieldError } from "../../utils/validation";

interface Props {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: any) => void;
    touched: Record<string, boolean>;
    handleBlur: (field: keyof FormDataType) => void;
}

export const Step1Personal = ({ data, onChange, touched, handleBlur }: Props) => {

    return (
        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 max-w-200 mx-auto w-full">
            <div className="flex flex-col gap-2">
                <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                    Personal Info
                </h1>
                <p className="text-[#617589] text-base font-normal leading-relaxed">
                    Please provide your details to set up your profile.
                </p>
            </div>

            {/* Form */}
            <form
                className="flex flex-col gap-6"
            >
                {/* FullName */}
                <label
                    className="flex flex-col gap-2"
                    htmlFor="fullname"
                >
                    <span className="text-black-01 text-sm font-semibold">
                        Full Name
                    </span>
                    <div className="relative flex flex-col gap-1">
                        <input
                            id="fullname"
                            type="text"
                            value={data.fullName}
                            onChange={(e) => onChange('fullName', e.target.value)}
                            onBlur={() => handleBlur('fullName')}
                            className={`w-full h-12 px-4 rounded-md border bg-white text-black-01 text-base transition-all
                            placeholder:text-[#9ca3af]
                                focus:outline-none focus:ring-2 
                                ${touched.fullName && getFieldError('fullName', data.fullName)
                                    ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                    : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                                }
                        `}
                            placeholder="e.g., Jane Doe"
                            required
                        />
                        {touched.fullName && getFieldError('fullName', data.fullName) && (
                            <p className="text-red-500 text-sm">
                                {getFieldError('fullName', data.fullName)}
                            </p>
                        )}
                    </div>
                </label>

                {/* Email */}
                <label
                    className="flex flex-col gap-2"
                    htmlFor="email"
                >
                    <span className="text-black-01 text-sm font-semibold">
                        Email
                    </span>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2
                        ${touched.email && getFieldError('email', data.email)
                                ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                            }`}
                        placeholder="new@email.com"
                        required
                    />
                    {touched.email && getFieldError('email', data.email) && (
                        <p className="text-red-500 text-sm">
                            {getFieldError('email', data.email)}
                        </p>
                    )}
                </label>

                {/* Birth Date */}
                <label
                    className="flex flex-col gap-2"
                    htmlFor="birthdate"
                >
                    <span className="text-black-01 text-sm font-semibold">
                        Birth Date
                    </span>
                    <input
                        id="birthdate"
                        type="date"
                        value={data.birthDate}
                        onChange={(e) => onChange('birthDate', e.target.value)}
                        onBlur={() => handleBlur('birthDate')}
                        className={`w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2
                        ${touched.birthDate && getFieldError('birthDate', data.birthDate)
                                ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                            }`}
                        required
                    />
                    {touched.birthDate && getFieldError('birthDate', data.birthDate) && (
                        <p className="text-red-500 text-sm">
                            {getFieldError('birthDate', data.birthDate)}
                        </p>
                    )}
                </label>
            </form>
        </div>
    )
}
