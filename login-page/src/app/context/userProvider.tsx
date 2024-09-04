'use client'

import { createContext, FC, useState } from "react";
import { User, UserProviderData } from "@/app/types";


export const UserContext = createContext<UserProviderData | null>(null);

export const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
