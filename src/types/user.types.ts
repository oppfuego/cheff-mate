export type UserRole = "user" | "admin";

export interface IUser {
    _id: string;

    firstName: string;
    lastName: string;

    email: string;
    phone: string;
    birthDate: string;

    address: {
        street: string;
        city: string;
        country: string;
        zip: string;
    };

    tokens: number;
    role: UserRole;

    createdAt: string;
    updatedAt: string;
}

export type Nullable<T> = T | null;

export interface UserResponse {
    user: IUser;
}