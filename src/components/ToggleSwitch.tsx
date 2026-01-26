import { Mail } from "lucide-react";

interface ToggleSwitchProps {
    id: string;
    title: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: React.ReactNode;
}

export const ToggleSwitch = ({
    id,
    title,
    description,
    checked,
    onChange,
    icon
}: ToggleSwitchProps) => {
    return (
        <section className="flex items-center justify-between gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-4">
                <div className="text-blue-primary flex items-center justify-center rounded-lg bg-blue-100 size-12 shrink-0">
                    {icon ?? <Mail size={24} />}
                </div>

                <div className="flex flex-col">
                    <p className="text-black-02 text-base font-semibold leading-normal">
                        {title}
                    </p>
                    <p className="text-slate-500 text-sm font-normal">
                        {description}
                    </p>
                </div>
            </div>

            <label htmlFor={id} className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                    type="checkbox"
                    id={id}
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <div
                    className="w-11 h-6 bg-gray-300 rounded-full 
                                peer peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-primary/40 peer-checked:bg-blue-primary
                                after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
            </label>
        </section>
    );
}
