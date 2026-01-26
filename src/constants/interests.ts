export const INTERESTS = [
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
    { id: "business", label: "Business" },
] as const;

export type INTERESTS = typeof INTERESTS[number]['label'];