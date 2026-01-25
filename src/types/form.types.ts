export interface FormDataType {
    // Step 1
    fullName: string;
    email: string;
    birthDate: string;

    // Step 2 
    username: string;
    password: string;
    confirmPassword: string;

    // Step 3
    interests: string[];
    newsletter: boolean;
    theme: 'light' | 'dark';
}