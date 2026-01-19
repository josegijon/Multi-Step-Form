
export const Step4Summary = () => {
    return (
        <div className="flex flex-col gap-8 w-full max-w-200 mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                        Review your details
                    </h1>
                    <p className="text-[#617589] text-base font-normal leading-relaxed">
                        Please verify that all information provided is correct before completing your registration.
                    </p>
                </div>

                <div className="p-2 sm:p-4 md:p-8 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-black-02 text-lg font-bold">
                            Personal Information
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Full Name
                            </p>
                            <p className="text-black-02 text-base font-medium">
                                Pillamos nombre
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Email Address
                            </p>
                            <p className="text-black-02 text-base font-medium">
                                email@email.com
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Birth date
                            </p>
                            <p className="text-black-02 text-base font-medium">
                                may 12, 1999
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Username
                            </p>
                            <p className="text-black-02 text-base font-medium">
                                @usuario
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-2 sm:p-4 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-black-02 text-lg font-bold">
                            Account Preferences
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Interests
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2.5 py-1 bg-blue-primary/10 text-blue-primary text-xs font-semibold rounded">
                                    Elegido
                                </span>
                                <span className="px-2.5 py-1 bg-blue-primary/10 text-blue-primary text-xs font-semibold rounded">
                                    Elegido
                                </span>
                                <span className="px-2.5 py-1 bg-blue-primary/10 text-blue-primary text-xs font-semibold rounded">
                                    Elegido
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Preferred Theme
                            </p>
                            <div className="flex items-center gap-2 text-black-02 text-base font-medium">
                                <span>
                                    {/* Icono */}O
                                </span>
                                Light Mode
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-01 text-xs font-semibold uppercase tracking-wider">
                                Newsletter Status
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <p className="text-black-02 text-base font-medium">Enabled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#e5e7eb] max-w-200 mx-auto">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="terms"
                        className="size-5 rounded border-slate-300 text-blue-primary focus:ring-blue-primary focus:ring-offset-2"
                    />
                </div>
                <label
                    htmlFor="terms"
                    className="text-sm text-gray-01 leading-relaxed cursor-pointer"
                >
                    I confirm that the information provided above is accurate. I have read and agree to the <a className="text-blue-primary font-medium hover:underline" href="#">Terms of Service</a> and <a className="text-blue-primary font-medium hover:underline" href="#">Privacy Policy</a>.
                </label>
            </div>
        </div>
    )
}
