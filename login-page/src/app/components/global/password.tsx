'use client'

import { FC, useState } from "react"
import { Input } from "./input"
import { Eye } from "@/app/icons/eye";
import { EyeSlash } from "@/app/icons/eyeSlash";

export const Password: FC<{ getValue?: (value: string) => void }> = ({ getValue }) => {
    const types = {
        text: 'password',
        password: 'text',
    }
    const defaultType = types.text;
    const [type, setType] = useState(defaultType);

    return (
        <div className="relative">
            <Input
                id="password"
                name="password"
                type={type}
                text="Password"
                getValue={getValue}
                autoComplete="current-password"
                required/>
                <div
                    className="absolute right-2 top-1/2 text-black cursor-pointer hover:text-[#4f46e5] dark:text-white"
                    onClick={() => setType(types[type as keyof typeof types])}>
                    {
                        (type === defaultType)
                            ? <Eye/>
                            : <EyeSlash/>
                    }
                </div>
        </div>
    )
}
