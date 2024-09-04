import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { authPages } from './app/pages';


export function middleware(request: NextRequest) {
  const user = cookies().get('user');

  if (!user) return NextResponse.redirect(new URL(`/login?message=Авторизуйтесь&from=${request.nextUrl.pathname}`, request.url));

  const currentUser = JSON.parse(user.value);
  return (authPages[request.nextUrl.pathname as keyof typeof authPages]?.some(r=> currentUser?.roles.includes(r)))
    ? NextResponse.next()
    : NextResponse.redirect(new URL(`/login?message=У Вас недостаточно прав&from=${request.nextUrl.pathname}`, request.url));
}

export const config = {
  matcher: ['/admin', '/guest'],
}
