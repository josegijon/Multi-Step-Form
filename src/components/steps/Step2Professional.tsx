import type { FormDataType } from "../../types/form.types";

interface Props {
    data: FormDataType;
    onChange: (field: keyof FormDataType, value: any) => void;
}

export const Step2Professional = ({ data, onChange }: Props) => {
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
                        <div className="relative flex items-center">
                            <input
                                id="username"
                                type="text"
                                className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                                placeholder="Enter unique username"
                                required
                                value={data.username}
                                onChange={(e) => onChange('username', e.target.value)}
                            />
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
                        <div className="relative flex w-full items-center rounded-lg group">
                            <input
                                id="password"
                                type="password"
                                className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                                placeholder="********"
                                required
                                value={data.password}
                                onChange={(e) => onChange('password', e.target.value)}
                            />

                            <div className="absolute right-3 flex items-center justify-center gap-2">
                                <button type="button">
                                    {/* Boton ojo */}
                                </button>
                            </div>
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
                        <div className="relative flex w-full items-center rounded-lg group">
                            <input
                                id="confirm-password"
                                type="password"
                                className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                                placeholder="********"
                                required
                                value={data.confirmPassword}
                                onChange={(e) => onChange('confirmPassword', e.target.value)}
                            />

                            <div className="absolute right-3 flex items-center justify-center gap-2">
                                <button type="button">
                                    {/* Boton ojo */}
                                </button>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}
