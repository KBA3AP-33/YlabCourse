import { Role } from "@/app/pages";

export interface LoginQuery {
    email: string;
    password: string;
}

export interface User {
    email: string,
    password?: string,
    roles: Role[],
}

export interface UserProviderData {
    user: User | null,
    setUser: (user: User) => void,
}
