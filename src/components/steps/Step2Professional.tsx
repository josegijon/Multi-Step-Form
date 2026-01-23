import type { FormDataType } from "../../types/form.types";
import { getFieldError } from "../../utils/validation";

interface Props {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: any) => void;
    touched: Record<string, boolean>;
    handleBlur: (field: keyof FormDataType) => void;
}

export const Step2Professional = ({ data, onChange, touched, handleBlur }: Props) => {
    return (
        <div className="px-4">
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 w-full max-w-200 mx-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                        Account Security
                    </h1>
                    <p className="text-[#617589] text-base font-normal leading-relaxed">
                        Secure your profile with a unique username and password.
                    </p>
                </div>

                {/* Form */}
                <form
                    className="flex flex-col gap-6"
                >
                    {/* Username */}
                    <label
                        className="flex flex-col gap-2"
                        htmlFor="username"
                    >
                        <span className="text-black-01 text-sm font-semibold">
                            Username
                        </span>
                        <div className="relative flex flex-col gap-1">
                            <input
                                id="username"
                                type="text"
                                value={data.username}
                                onChange={(e) => onChange('username', e.target.value)}
                                onBlur={() => handleBlur('username')}
                                className={`w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all
                                placeholder:text-[#9ca3af]
                                focus:outline-none focus:ring-2
                                ${touched.username && getFieldError('username', data.username)
                                        ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                        : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                                    }`}
                                placeholder="Enter unique username"
                                required
                            />
                            {touched.username && getFieldError('username', data.username) && (
                                <p className="text-red-500 text-sm">
                                    {getFieldError('username', data.username)}
                                </p>
                            )}
                        </div>
                    </label>

                    {/* Password */}
                    <label
                        className="flex flex-col gap-2"
                        htmlFor="password"
                    >
                        <span className="text-black-01 text-sm font-semibold">
                            Password
                        </span>
                        <div className="flex flex-col gap-1">
                            <div className="relative flex w-full items-center rounded-lg group">
                                <input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => onChange('password', e.target.value)}
                                    onBlur={() => handleBlur('password')}
                                    className={`w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                                    placeholder:text-[#9ca3af]
                                    focus:outline-none focus:ring-2
                                    ${touched.password && getFieldError('password', data.password)
                                            ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                            : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                                        }`}
                                    placeholder="********"
                                    required
                                />


                                <div className="absolute right-3 flex items-center justify-center gap-2">
                                    <button type="button">
                                        {/* Boton ojo */}
                                    </button>
                                </div>
                            </div>
                            {touched.password && getFieldError('password', data.password) && (
                                <p className="text-red-500 text-sm">
                                    {getFieldError('password', data.password)}
                                </p>
                            )}
                        </div>
                    </label>

                    {/* Confirm Password */}
                    <label
                        className="flex flex-col gap-2"
                        htmlFor="confirm-password"
                    >
                        <span className="text-black-01 text-sm font-semibold">
                            Confirm Password
                        </span>
                        <div className="flex flex-col gap-1">
                            <div className="relative flex flex-col w-full items-center rounded-lg group">
                                <input
                                    id="confirm-password"
                                    type="password"
                                    value={data.confirmPassword}
                                    onChange={(e) => onChange('confirmPassword', e.target.value)}
                                    onBlur={() => handleBlur('confirmPassword')}
                                    className={`w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer
                                placeholder:text-[#9ca3af]
                                focus:outline-none focus:ring-2 
                                ${touched.confirmPassword && getFieldError('confirmPassword', data.confirmPassword, data)
                                            ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                                            : 'border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary'
                                        }`}
                                    placeholder="********"
                                    required
                                />
                                <div className="absolute right-3 flex items-center justify-center gap-2">
                                    <button type="button">
                                        {/* Boton ojo */}
                                    </button>
                                </div>
                            </div>
                            {touched.confirmPassword && getFieldError('confirmPassword', data.confirmPassword, data) && (
                                <p className="text-red-500 text-sm">
                                    {getFieldError('confirmPassword', data.confirmPassword, data)}
                                </p>
                            )}
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}
