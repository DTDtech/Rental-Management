import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

const protectedRoutes = ['/protected/profile', '/protected/orders']
const publicRoutes = ['/auth/login', '/auth/signup', '/']

export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    const token = await getToken({ req });

    if (isProtectedRoute && !token?.id) {
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
    }

}