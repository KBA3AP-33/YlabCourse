'use client'

import Link from "next/link";
import { logoutRequest } from "@/app/server";
import { Button } from "@/app/components/global/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-[#111827] dark:!text-white">
      <div className="flex gap-4">
        <Link className="hover:text-[#4f46e5]" href="/">Home</Link>
        <Link className="hover:text-[#4f46e5]" href="/login">Login</Link>
        <Link className="hover:text-[#4f46e5]" href="/admin">Admin-page</Link>
        <Link className="hover:text-[#4f46e5]" href="/guest">Guest-page</Link>
        <Button className="!text-black bg-transparent !p-0 hover:!text-[#4f46e5] hover:bg-transparent dark:!text-white" onClick={() => logoutRequest()}>
          Выйти
        </Button>
      </div>
    </main>
  );
}
