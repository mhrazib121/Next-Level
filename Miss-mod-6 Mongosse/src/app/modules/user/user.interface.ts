export interface IUser {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    gender: "male" | "female";
};
