export const getInputStyles = (hasError: boolean) =>
    `w-full h-12 px-4 rounded-md border bg-white text-black-01 text-base transition-all
    placeholder:text-[#9ca3af] focus:outline-none focus:ring-2
    ${hasError
        ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
        : "border-[#dbe0e6] focus:ring-blue-primary/50 focus:border-blue-primary"
    }`;