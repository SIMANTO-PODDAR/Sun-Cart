import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        return NextResponse.next();
    }


    const loginUrl = new URL('/login', request.url)


    loginUrl.searchParams.set(
        'redirect',
        request.nextUrl.pathname + request.nextUrl.search
    )

    return NextResponse.redirect(loginUrl)
}

export const config = {
    matcher: ['/products/:id', '/profile', '/profile/update'],
}