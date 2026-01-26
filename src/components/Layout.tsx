import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <main className="font-inter bg-[#f3f4f6] min-h-screen flex flex-col gap-4 p-4 pb-8">
        <Header />
        {children}
    </main>
);