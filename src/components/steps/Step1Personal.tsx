
export const Step1Personal = () => {
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
                    <div className="relative flex items-center">
                        <input
                            id="fullname"
                            type="text"
                            className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                            placeholder="e.g., Jane Doe"
                        />
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
                        className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                        placeholder="new@email.com"
                    />
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
                        className="w-full h-12 px-4 rounded-md border border-[#dbe0e6] bg-white text-black-01 text-base transition-all peer 
                        placeholder:text-[#9ca3af]
                        focus:outline-none focus:ring-2 focus:ring-blue-primary/50 focus:border-blue-primary"
                    />
                </label>
            </form>
        </div>
    )
}
