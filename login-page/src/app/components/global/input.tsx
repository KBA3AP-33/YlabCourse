'use client'

import { ComponentProps, FC, useEffect, useState } from "react";

interface Props extends ComponentProps<'input'> {
    text?: string,
    getValue?: (value: string) => void,
}

export const Input: FC<Props> = ({ className, text, getValue, ...props }) => {
    const [value, setValue] = useState('');
    useEffect(() => getValue && getValue(value), [value])

    return (
        <div className={`flex flex-col ${className}`}>
            {
                text && <label htmlFor={props.id}>{text}</label>
            }
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="text-sm text-black leading-6 px-2 py-1 rounded-md border-2 border-black focus:border-[#4f46e5] focus:outline-none dark:bg-[#1d2432] dark:border-gray-100 dark:text-white"
                {...props} />
        </div>
    )
}
