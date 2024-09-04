import { Login } from "@/app/components/authentication/login";
import { Suspense } from 'react';

export default function Page() {
    return (
        <main className="h-screen flex justify-center items-center dark:bg-[#111827] dark:text-white">
            <Suspense>
                <Login/>
            </Suspense>
        </main>
    )
}
