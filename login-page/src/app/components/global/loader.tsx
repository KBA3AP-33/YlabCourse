import { FC } from "react"

export const Loader: FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <div className={`flex items-center justify-center ${(!isActive) ? 'hidden' : ''}`}>
            <div
                className="h-4 w-4 inline-block animate-spin rounded-full border-2 border-solid border-e-transparent"
                role="status">
                <span
                    className="h-px w-px absolute overflow-hidden whitespace-nowrap border-0 -m-px p-0">
                    Loading...
                </span>
            </div>
        </div>
    )   
}
