'use server'

import { cookies } from "next/headers";
import { Role } from "@/app/pages";
import { LoginQuery, User } from "@/app/types";


const users = [
    { email: 'admin@mail.ru', password: 'admin', roles: [Role.Admin, Role.Guest] },
    { email: 'guest@mail.ru', password: 'guest', roles: [Role.Guest] },
];

export const loginRequest = (params: LoginQuery): Promise<User | null> => {  
    return new Promise((res, rej) => {
        const user = users.find(user => user.email === params.email && user.password === params.password) ?? null;
        let userMinusPassword = null;
        
        if (user) {
            const { password, ...nextUser } = user;
            userMinusPassword = {...nextUser};
        }
        
        cookies().set('user', JSON.stringify(userMinusPassword));
        setTimeout(() => res(userMinusPassword), 1000);
    });
};

export const logoutRequest = (): Promise<void> => {  
    return new Promise((res, rej) => {
        cookies().delete('user');
        res();
    });
};

export const loginRequestError = (params: LoginQuery): Promise<User | null> => {
    return new Promise(() => {
        throw new Error("500, unknown server error");
    });
};
