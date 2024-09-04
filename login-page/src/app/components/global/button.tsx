import { ComponentProps, FC } from "react"

interface Props extends ComponentProps<'button'> { }

export const Button: FC<Props> = ({ children, className, ...props }) => {
    const baseStyle = 'bg-[#4f46e5] text-white rounded-md transition-colors px-3 py-1.5 hover:bg-[#6366f1] disabled:bg-gray-500';

    return (
        <button className={`${baseStyle} ${className}`} {...props}>
            {children}
        </button>
    )
}
