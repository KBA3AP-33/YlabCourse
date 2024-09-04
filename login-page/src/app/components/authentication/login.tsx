'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { LoginQuery } from "@/app/types";
import { loginRequest } from "@/app/server";
import { Input } from "@/app/components/global/input"
import { Password } from "@/app/components/global/password"
import { Button } from "@/app/components/global/button";
import { Loader } from "@/app/components/global/loader";


export const Login = () => {
    const params = useSearchParams();
    const [error, setError] = useState(params.get('message') ?? '');
    const [isLoader, setIsLoader] = useState(false);
    const [query, setQuery] = useState<LoginQuery>({} as LoginQuery);
    const router = useRouter()

    const login = (e: FormEvent) => {
        e.preventDefault();
        setIsLoader(true);
        loginRequest(query)
            .then(user => {
                if (user) {   
                    setError('');
                    const route = params.get('from');
                    router.push(`${route ?? '/'}`);
                }
                setError('Проверьте логин или пароль');
            })
            .catch(e => setError(e.message))
            .finally(() => setIsLoader(false));
    }

    return (
        <form className="w-full max-w-md flex flex-col border rounded-md p-4 sm:p-12 [&>*]:mb-4 dark:bg-[#111827]" onSubmit={(e) => login(e)}>
            <h1 className="text-2xl text-center font-bold leading-9">Войти в свою учетную запись</h1>

            <Input
                id="email"
                name="email"
                type="email"
                text="Email"
                getValue={(email) => setQuery(prev => ({ ...prev, email: email.trim() }))}
                required/>
            <Password
                getValue={(password) => setQuery(prev => ({ ...prev, password: password.trim() }))}/>

            <div className="flex justify-between items-center">
                <Input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    text="Запомнить меня"
                    className="!flex-row-reverse !gap-2 flex-nowrap"/>
                <a href="#" className="hover:text-[#4f46e5]">Забыли пароль?</a>
            </div>

            {
                error && <p className="text-red-500">{error}</p>
            }

            <Button
                type="submit"
                className="flex justify-center items-center gap-2 flex-nowrap !mb-0"
                disabled={isLoader}>
                Sign in
                <Loader isActive={isLoader}/>
            </Button>
        </form>
    )
}
