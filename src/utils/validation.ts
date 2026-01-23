import { AGE_LIMIT } from "../constants/formSteps";
import type { FormDataType } from "../types/form.types";

export const isValidFullName = (name: string) => {
    return name.trim().length >= 3;
};

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return password.length >= 8;
};

export const isStrongPassword = (password: string): boolean => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongRegex.test(password);
};

export const passwordMatch = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword && password.length > 0;
};

export const isValidUsername = (username: string): boolean => {
    return username.length >= 4 && username.length <= 20;
};

export const isValidDate = (date: string): boolean => {
    if (!date) return false;
    const selectedDate = new Date(date);
    const today = new Date();
    const minAge = new Date(today.getFullYear() - AGE_LIMIT, today.getMonth(), today.getDate());
    return selectedDate <= minAge;
};

// Step 1
export const validateStep1 = (data: FormDataType): boolean => {
    return (
        isValidFullName(data.fullName) &&
        isValidEmail(data.email) &&
        isValidDate(data.birthDate)
    );
};

export const validateStep2 = (data: FormDataType): boolean => {
    return (
        isValidUsername(data.username) &&
        isValidPassword(data.password) &&
        passwordMatch(data.password, data.confirmPassword)
    );
};

// Error message
export const getFieldError = (field: keyof FormDataType, value: any, formData?: FormDataType): string | null => {
    switch (field) {
        case 'fullName':
            return !isValidFullName(value) ? 'Name must be at least 3 characters' : null;

        case 'email':
            return !isValidEmail(value) ? 'Please enter a valid email' : null;

        case 'birthDate':
            return !isValidDate(value) ? 'You must be at least 13 years old' : null;

        case 'username':
            return !isValidUsername(value) ? 'Username must be 4-20 characters' : null;

        case 'password':
            return !isValidPassword(value) ? 'Password must be at least 8 characters' : null;

        case 'confirmPassword':
            return formData && !passwordMatch(formData.password, value)
                ? 'Passwords do not match'
                : null;

        default:
            return null;
    }
};