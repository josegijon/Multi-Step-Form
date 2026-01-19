
export const Step3Preferences = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8 flex flex-col gap-8 max-w-200 mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-black-01 text-[32px] font-bold leading-tight tracking-tight">
                    Set your preferences
                </h1>
                <p className="text-[#617589] text-base font-normal leading-relaxed">
                    Tell us about your interests and choose how you want to see the platform.
                </p>
            </div>

            {/* Form */}
            <form
                className="flex flex-col gap-6"
            >
                {/* Interests */}
                <h2 className="text-black-01 text-lg font-bold leading-tight ">Interests</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label
                        className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white transition-colors cursor-pointer group
                        hover:border-blue-primary/30 hover:bg-blue-50/30"
                        htmlFor="design"
                    >
                        <input
                            id="design"
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 bg-white text-blue-primary
                            focus:ring-blue-primary focus:ring-offset-white
                            accent-blue-primary"
                        />
                        <span className="text-slate-700 group-hover:text-black-01 font-medium">
                            Design
                        </span>
                    </label>

                    <label
                        className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white transition-colors cursor-pointer group
                        hover:border-blue-primary/30 hover:bg-blue-50/30"
                        htmlFor="development"
                    >
                        <input
                            id="development"
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 bg-white text-blue-primary
                            focus:ring-blue-primary focus:ring-offset-white
                            accent-blue-primary"
                        />
                        <span className="text-slate-700 group-hover:text-black-01 font-medium">
                            Development
                        </span>
                    </label>

                    <label
                        className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white transition-colors cursor-pointer group
                        hover:border-blue-primary/30 hover:bg-blue-50/30"
                        htmlFor="marketing"
                    >
                        <input
                            id="marketing"
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 bg-white text-blue-primary
                            focus:ring-blue-primary focus:ring-offset-white
                            accent-blue-primary"
                        />
                        <span className="text-slate-700 group-hover:text-black-01 font-medium">
                            Marketing
                        </span>
                    </label>

                    <label
                        className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white transition-colors cursor-pointer group
                        hover:border-blue-primary/30 hover:bg-blue-50/30"
                        htmlFor="business"
                    >
                        <input
                            id="business"
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 bg-white text-blue-primary
                            focus:ring-blue-primary focus:ring-offset-white
                            accent-blue-primary"
                        />
                        <span className="text-slate-700 group-hover:text-black-01 font-medium">
                            Business
                        </span>
                    </label>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>


                {/* Newsletter */}
                <section className="flex items-center justify-between gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="text-blue-primary flex items-center justify-center rounded-lg bg-blue-100 size-12 shrink-0">
                            {/* Icono email */}
                        </div>

                        <div className="flex flex-col">
                            <p className="text-[#1F2937] text-base font-semibold leading-normal">
                                Newsletter
                            </p>
                            <p className="text-slate-500 text-sm font-normal">
                                Receive the latest news and professional tips.
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <label
                            htmlFor="newsletter"
                            className="relative inline-flex items-center cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                id="newsletter"
                                className="sr-only peer"
                            />
                            <div
                                className="w-11 h-6 bg-gray-300 rounded-full 
                                peer peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-primary/40 peer-checked:bg-blue-primary
                                after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
                            </div>
                        </label>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full"></div>

                {/* Preferred theme */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-black-01 text-lg font-bold leading-tight ">
                        Preferred theme
                    </h2>

                    <p className="text-slate-500 text-sm">
                        Personalize the visual appearance of your dashboard.
                    </p>
                </div>

                <div className="relative w-full md:w-2/3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <span>
                            {/* Icono tema */}O
                        </span>
                    </div>

                    <select
                        name=""
                        id=""
                        className="bg-white border border-gray-300 text-[#1F2937] text-sm rounded-lg block w-full pl-10 p-3.5 appearance-none outline-none transition-all cursor-pointer
                        focus:ring-blue-primary focus:border-blue-primary"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                        <span>
                            {/* Icono flecha */}
                            O
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}
