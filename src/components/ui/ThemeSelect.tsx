import { ChevronDown, Palette } from "lucide-react";

interface ThemeSelectProp {
    value: "light" | "dark";
    onChange: (value: "light" | "dark") => void;
}

export const ThemeSelect = ({ value, onChange }: ThemeSelectProp) => {
    return (
        <div className="flex flex-col gap-4">
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
                    <Palette size={18} />
                </div>

                <select
                    id="theme"
                    name="theme"
                    className="bg-white border border-gray-300 text-black-02 text-sm rounded-lg block w-full pl-10 p-3.5 appearance-none outline-none transition-all cursor-pointer
                        focus:ring-blue-primary focus:border-blue-primary"
                    value={value}
                    onChange={(e) => onChange(e.target.value as "light" | "dark")}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
                </div>
            </div>
        </div>


    )
}
